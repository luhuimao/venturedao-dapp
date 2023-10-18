import { observable } from 'mobx';
import Web3 from "web3";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { withGlobalLoading, wrapPromise } from '../util/decorator';
import TimeUtil from '@pefish/js-util-time';
import { StringUtil } from '@pefish/js-node-assist';
import config from '../config';
import { Contract } from "web3-eth-contract"
import Util from '../util/util';
import {
  Modal
} from 'antd';
import { EthWallet } from "@pefish/js-coin-eth";
import { Network, toBigInt, toNumber } from 'ethers';

const walletConnectConfig = {
  rpc: {
    1: config.rpcUrl
  }
}
export default class CommonStore {

  @observable public globalLoading: boolean = false;
  public globalLoadingCount: number = 0 // 控制全局loading的显示时机
  @observable public user: string = ""
  @observable public userBalance: string = "0"
  @observable public rebateRate: string = "0"  // 普通佣金比例。10%，这里就是10
  @observable public vipRebateRate: string = "0"
  @observable public userTestNFTBalance: string = "0"
  @observable public isSteward: boolean = false
  @observable public isRaiser: boolean = false

  @observable public stewardProposalInfo: any
  @observable public PollVoteResult: any
  @observable public vestingClaimableValue: any
  @observable public depositBalance: any
  @observable public allocatedAmount: any
  @observable public adapterAddress: any
  @observable public erc20Balance: any
  @observable public erc20Allowance: any
  @observable public daoConfigValue: any
  @observable public daoAddressConfigValue: any
  @observable public fundingProposalInfo: any
  @observable public voteValue: any
  @observable public poolBalance: any
  @observable public vestInfo: any
  @observable public participantMembershipInfo: any
  @observable public vintageVotingResult: any
  @observable public vintageVotingWeight: any
  @observable public vintageCreatedFundCounter: any
  @observable public vintageFundToken: any
  @observable public fundRaiseState: any
  @observable public vintageFrontProposalId: any

  private web3Provider?: any
  private web3Instance?: Web3
  private coinToolsContractInstance?: Contract
  private ethWallet: EthWallet = new EthWallet()
  private vestingContractInstance?: Contract
  private testNFTContractInstance?: Contract
  private summonDaoContractInstance?: Contract;
  private summonVintageDaoContractInstance?: Contract;
  private stewardContactInstance?: Contract;
  private flexFundingContractInstance?: Contract;
  private flexPollingVotingContractInstance?: Contract;
  private flexVotingContractInstance?: Contract;
  private flexFundingPoolAdaptContractInstance?: Contract;
  private TestUSDTContractInstance?: Contract;
  private TestReturnTokenContractInstance?: Contract;
  private flexVestingContractInstance?: Contract;
  private flexAllocContractInstance?: Contract;
  private flexFundingReturnTokenContractInstance?: Contract;
  private ERC20ContractInstance?: Contract;
  private VintageRiaserContractInstance?: Contract;
  private VintageVotingContractInstance?: Contract;
  private VintageNewFundContractInstance?: Contract;
  private VintageFundingPoolAdapterContractInstance?: Contract;
  private VintageFundingAdapterContractInstance?: Contract;
  private VintageAllocationAdapterContractInstance?: Contract;
  private VintageVestingContractInstance?: Contract;
  private VintageBenToBoxContractInstance?: Contract;
  private VintageEscrowFundContractInstance?: Contract;

  private networkId?: String;
  // 用作没连接到钱包之前的访问
  // private publicProvider = new Web3.providers.HttpProvider(config.rpcUrl)
  // private web3PublicInstance: Web3 = new Web3(this.publicProvider)
  // private coinToolsPublicContractInstance?: Contract = new this.web3PublicInstance.eth.Contract(config.coinToolContractAbi, config.coinToolContractAddress);
  private daoFacAddress?: String;
  private flexFundingPoolFacAddress?: String;
  private invitorAddress: string = Util.getQueryVariable("invitor")
  private timerStatus: boolean = false
  @observable public vipInfo?: {
    type_: string,
    registerTime: string,
    enable: boolean
  }
  @observable public isVipValid: boolean = false
  public tools?: {
    name: string, // tool的名字
    addr: string,  // tool的合约地址
    reward: string,  // 收费多少eth
    monthVipReward: string,  // 月费价格的收费价格
    enable: boolean  // 是否启用
  }[] = []

  constructor() {
    TimeUtil.setInterval(async () => {
      if (!this.timerStatus) {
        return
      }
      try {
        await this.loop()
      } catch (err) {
        console.error(err)
      }
    }, 3000)

    // 如果metamask安装了则立马连接
    if (typeof window["ethereum"] !== 'undefined') {
      console.log(`window["ethereum"]`, window["ethereum"])
      this.connectMetamask()
    }
  }

  private async connectMetamask() {
    this.web3Provider = window["ethereum"]
    console.log(this.web3Provider);
    this.web3Provider.on('accountsChanged', async (accounts) => {
      console.log("metamask账户变更")
      if (accounts.length === 0) {  // metamask连上的账户全部断开了
        this.afterWalletDisconnectSuccess()
        return
      }
      this.user = accounts[0]
      console.log("获取到用户:", this.user)
      this.web3Instance = new Web3(this.web3Provider as any)
      this.coinToolsContractInstance = new this.web3Instance!.eth.Contract(config.coinToolContractAbi, config.coinToolContractAddress);
      await this.afterConnectWalletSuccess()
    });

    const accounts = await this.web3Provider.request({ method: 'eth_requestAccounts' });
    this.user = accounts[0]
    console.log("获取到用户:", this.user)
    this.web3Instance = new Web3(this.web3Provider as any)
    // this.coinToolsContractInstance = new this.web3Instance!.eth.Contract(config.coinToolContractAbi, config.coinToolContractAddress);
    this.vestingContractInstance = new this.web3Instance!.eth.Contract(
      config.vestingContractABI, config.vestingContractAddressRINKEBY);
    this.testNFTContractInstance = new this.web3Instance!.eth.Contract(
      config.testNFTContractABI,
      config.testNFTContractAddressRINKEBY);
    const netId = await this.web3Instance!.eth.net.getId();
    console.log(netId);
    this.networkId = this.web3Instance!.utils.toHex(netId);
    if (netId === 80001) {
      this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
        config.summonDaoABI,
        config.summonDaoContractAddress_MUMBAI
      );

      this.stewardContactInstance = new this.web3Instance!.
        eth.Contract(config.stewardManagementABI,
          config.stewardMangementContractAddress_MUMBAI);

      this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(
        config.flexFundingContractABI,
        config.flexFundingContractAddress_MUMBAI
      );

      this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(
        config.flexPollingVotingContractABI,
        config.FlexPollVotingContractADDRESS_MUMBAI
      );

      this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_Voting_Adapter_Contract_ABI,
        config.Flex_Voting_Adapter_Contract_Address_MUMBAI
      );

      this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(
        config.flexFundingPoolAdaptContractABI,
        config.Flex_Funding_Pool_Adapt_Contract_Address_MUMBAI
      );
      this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_USDT_Address_MUMBAI
      );
      this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_RETURN_TOKEN_Address_MUMBAI
      );

      this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_VESTING_CONTRACT_ABI,
        config.Flex_Vesting_MUMBAI
      );

      this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_ALLOCK_CONTRACT_ABI,
        config.FlexAllocationAdapterContract_MUMBAI
      );
    }
    else if (netId === 5) {
      this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
        config.summonDaoABI,
        config.summonDaoContractAddressGOERLI
      );
      this.summonVintageDaoContractInstance = new this.web3Instance!.eth.Contract(
        config.Summon_Vintage_Dao_ABI,
        config.Summon_Vintage_Dao_GOERLI
      );

      this.stewardContactInstance = new this.web3Instance!.
        eth.Contract(config.stewardManagementABI,
          config.stewardMangementContractAddressGOERLI);

      this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingContractABI,
        config.flexFundingContractAddressGOERLI);

      this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(config.flexPollingVotingContractABI,
        config.flexPolingVotingContractADDRESSGOERLI);

      this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(config.Flex_Voting_Adapter_Contract_ABI,
        config.Flex_Voting_Adapter_Contract_Address_GOERLI);

      this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingPoolAdaptContractABI,
        config.flexFundingPoolAdaptContractAddressGOERLI);

      this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_VESTING_CONTRACT_ABI,
        config.Flex_Vesting_GOERLI
      );

      this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_USDT_Address_GOERLI
      );
      this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_RETURN_TOKEN_Address_GOERLI
      );
      this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_ALLOCK_CONTRACT_ABI,
        config.FlexAllocationAdapterContract_GOERLI
      );
      this.VintageRiaserContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Raiser_Management_Contract_ABI,
        config.Vintage_Raiser_Management_Contract_GOERLI
      );
      this.VintageVotingContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Voting_Contract_ABI,
        config.Vintage_Voting_Contract_GOERLI
      );
      this.VintageNewFundContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Fund_Raise_Adapter_Contract_ABI,
        config.Vintage_Fund_Raise_Adapter_Contract_GOERLI
      );
    }
    else if (netId === 100) {
      this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
        config.summonDaoABI,
        config.summonDaoContractAddressXDAI
      );
      this.summonVintageDaoContractInstance = new this.web3Instance!.eth.Contract(
        config.Summon_Vintage_Dao_ABI,
        config.Summon_Vintage_Dao_XDAI
      );

      this.stewardContactInstance = new this.web3Instance!.
        eth.Contract(config.stewardManagementABI,
          config.stewardMangementContractAddressXDAI);

      this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingContractABI,
        config.flexFundingContractAddressXDAI);

      this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(config.flexPollingVotingContractABI,
        config.flexPolingVotingContractADDRESSXDAI);

      this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(config.Flex_Voting_Adapter_Contract_ABI,
        config.Flex_Voting_Adapter_Contract_Address_XDAI);

      this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingPoolAdaptContractABI,
        config.flexFundingPoolAdaptContractAddressXDAI);

      this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_VESTING_CONTRACT_ABI,
        config.Flex_Vesting_XDAI
      );

      this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_USDT_Address_XDAI
      );
      this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_TEST_TKEN_CONTRACT_ABI,
        config.Flex_TEST_RETURN_TOKEN_Address_XDAI
      );
      this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_ALLOCK_CONTRACT_ABI,
        config.FlexAllocationAdapterContract_XDAI
      );

      this.flexFundingReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
        config.Flex_Funding_Return_Token_Contract_ABI,
        config.flex_Funding_Return_Token_Adapter_Contract_XDAI
      );

      this.VintageRiaserContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Raiser_Management_Contract_ABI,
        config.Vintage_Raiser_Management_Contract_XDAI
      );
      this.VintageVotingContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Voting_Contract_ABI,
        config.Vintage_Voting_Contract_XDAI
      );
      this.VintageNewFundContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Fund_Raise_Adapter_Contract_ABI,
        config.Vintage_Fund_Raise_Adapter_Contract_XDAI
      );

      this.VintageFundingPoolAdapterContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Funding_Pool_Adapter_Contract_ABI,
        config.Vintage_Funding_Pool_Adapter_Contract_XDAI
      );

      this.VintageFundingAdapterContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Funding_Adapter_Contract_ABI,
        config.Vintage_Funding_Adapter_Contract_XDAI
      );

      this.VintageAllocationAdapterContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Allocation_Adapter_Contract_ABI,
        config.Vintage_Allocation_Adapter_Contract_XDAI
      );

      this.VintageVestingContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Vesting_ABI,
        config.Vintage_Vesting_XDAI
      );

      this.VintageEscrowFundContractInstance = new this.web3Instance!.eth.Contract(
        config.Vintage_Escrow_Fund_Adapter_ABI,
        config.vintage_Escrow_FundAdapter_Contract_XDAI);
    } else { }


    this.web3Provider.on('chainChanged', async (network) => {
      this.networkId = network;
      console.log(network);
      if (network === "0x13881") {
        console.log("mumbai network");
        this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
          config.summonDaoABI,
          config.summonDaoContractAddress_MUMBAI
        );

        this.stewardContactInstance = new this.web3Instance!.
          eth.Contract(config.stewardManagementABI,
            config.stewardMangementContractAddress_MUMBAI);

        this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(
          config.flexFundingContractABI,
          config.flexFundingContractAddress_MUMBAI
        );

        this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.flexPollingVotingContractABI,
          config.FlexPollVotingContractADDRESS_MUMBAI
        );

        this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_Voting_Adapter_Contract_ABI,
          config.Flex_Voting_Adapter_Contract_Address_MUMBAI
        );

        this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(
          config.flexFundingPoolAdaptContractABI,
          config.Flex_Funding_Pool_Adapt_Contract_Address_MUMBAI
        );
        this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_USDT_Address_MUMBAI
        );
        this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_RETURN_TOKEN_Address_MUMBAI
        );

        this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_VESTING_CONTRACT_ABI,
          config.Flex_Vesting_MUMBAI
        );

        this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_ALLOCK_CONTRACT_ABI,
          config.FlexAllocationAdapterContract_MUMBAI
        );
      }
      else if (network === "0x5") {
        console.log("goerli network");
        this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
          config.summonDaoABI,
          config.summonDaoContractAddressGOERLI
        );

        this.stewardContactInstance = new this.web3Instance!.
          eth.Contract(config.stewardManagementABI,
            config.stewardMangementContractAddressGOERLI);

        this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingContractABI,
          config.flexFundingContractAddressGOERLI);

        this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.flexPollingVotingContractABI,
          config.flexPolingVotingContractADDRESSGOERLI);

        this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_Voting_Adapter_Contract_ABI,
          config.Flex_Voting_Adapter_Contract_Address_GOERLI);

        this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(
          config.flexFundingPoolAdaptContractABI,
          config.flexFundingPoolAdaptContractAddressGOERLI);

        this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_VESTING_CONTRACT_ABI,
          config.Flex_Vesting_GOERLI
        );

        this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_USDT_Address_GOERLI
        );
        this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_RETURN_TOKEN_Address_GOERLI
        );
        this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_ALLOCK_CONTRACT_ABI,
          config.FlexAllocationAdapterContract_GOERLI
        );
        this.VintageRiaserContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Raiser_Management_Contract_ABI,
          config.Vintage_Raiser_Management_Contract_GOERLI
        );
        this.VintageVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Voting_Contract_ABI,
          config.Vintage_Voting_Contract_GOERLI
        );
        this.VintageNewFundContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Fund_Raise_Adapter_Contract_ABI,
          config.Vintage_Fund_Raise_Adapter_Contract_GOERLI
        );
      }
      else if (network === "0x64") {
        console.log("gnosis network");
        this.summonDaoContractInstance = new this.web3Instance!.eth.Contract(
          config.summonDaoABI,
          config.summonDaoContractAddressXDAI
        );

        this.stewardContactInstance = new this.web3Instance!.
          eth.Contract(config.stewardManagementABI,
            config.stewardMangementContractAddressXDAI);

        this.flexFundingContractInstance = new this.web3Instance!.eth.Contract(config.flexFundingContractABI,
          config.flexFundingContractAddressXDAI);

        this.flexPollingVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.flexPollingVotingContractABI,
          config.flexPolingVotingContractADDRESSXDAI);

        this.flexVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_Voting_Adapter_Contract_ABI,
          config.Flex_Voting_Adapter_Contract_Address_XDAI);

        this.flexFundingPoolAdaptContractInstance = new this.web3Instance!.eth.Contract(
          config.flexFundingPoolAdaptContractABI,
          config.flexFundingPoolAdaptContractAddressXDAI);

        this.flexVestingContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_VESTING_CONTRACT_ABI,
          config.Flex_Vesting_XDAI
        );

        this.TestUSDTContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_USDT_Address_XDAI
        );
        this.TestReturnTokenContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_TEST_TKEN_CONTRACT_ABI,
          config.Flex_TEST_RETURN_TOKEN_Address_XDAI
        );
        this.flexAllocContractInstance = new this.web3Instance!.eth.Contract(
          config.Flex_ALLOCK_CONTRACT_ABI,
          config.FlexAllocationAdapterContract_XDAI
        );

        this.summonVintageDaoContractInstance = new this.web3Instance!.eth.Contract(
          config.Summon_Vintage_Dao_ABI,
          config.Summon_Vintage_Dao_XDAI
        );
        this.VintageRiaserContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Raiser_Management_Contract_ABI,
          config.Vintage_Raiser_Management_Contract_XDAI
        );
        this.VintageVotingContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Voting_Contract_ABI,
          config.Vintage_Voting_Contract_XDAI
        );
        this.VintageNewFundContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Fund_Raise_Adapter_Contract_ABI,
          config.Vintage_Fund_Raise_Adapter_Contract_XDAI
        );

        this.VintageFundingPoolAdapterContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Funding_Pool_Adapter_Contract_ABI,
          config.Vintage_Funding_Pool_Adapter_Contract_XDAI
        );

        this.VintageFundingAdapterContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Funding_Adapter_Contract_ABI,
          config.Vintage_Funding_Adapter_Contract_XDAI
        );

        this.VintageAllocationAdapterContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Allocation_Adapter_Contract_ABI,
          config.Vintage_Allocation_Adapter_Contract_XDAI
        );

        this.VintageVestingContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Vesting_ABI,
          config.Vintage_Vesting_XDAI
        );

        this.VintageEscrowFundContractInstance = new this.web3Instance!.eth.Contract(
          config.Vintage_Escrow_Fund_Adapter_ABI,
          config.vintage_Escrow_FundAdapter_Contract_XDAI);
      }
      else { }
    });
    await this.afterConnectWalletSuccess()
  }

  private async loop() {

  }

  // 钱包登陆后做什么
  @withGlobalLoading()
  async afterConnectWalletSuccess() {
    console.log("钱包连接成功")
    // 开启定时器
    this.timerStatus = true

    // await Promise.all([
    //   (async () => {
    //     // 取余额
    //     console.log("取余额。。。")
    //     this.userBalance = StringUtil.unShiftedBy_(await Util.timeoutWrapperCall(async () => {
    //       return await this.web3Instance!.eth.getBalance(this.user)
    //     }), 18)
    //   })(),
    //   (async () => {
    //     // 取余额
    //     console.log("取NFT余额。。。")
    //     this.userTestNFTBalance = await Util.timeoutWrapperCall(async () => {
    //       return await this.testNFTContractInstance!.methods.balanceOf(this.user).
    //         call({
    //           from: this.user,
    //         })
    //     });
    //   })(),
    // ])
  }

  // 授权方主动断开后做什么
  afterWalletDisconnectSuccess(type: string = "metamask") {
    if (type === "wallet_connect") {
      this.web3Provider?.disconnect()  // 断开session
    }
    this.user = ""
    this.timerStatus = false
  }

  @withGlobalLoading()
  async becomeVip() {
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }
    if (this.isVipValid) {
      Modal.info({
        content: "您已经是尊贵会员。"
      })
      return
    }
    const requiredFee = await Util.timeoutWrapperCall(async () => {
      return await this.coinToolsContractInstance?.methods.getRequiredFee(0).call({
        from: this.user,
      })
    })
    console.log(`要求收取费用：${StringUtil.unShiftedBy_(requiredFee, 18)}`)
    try {
      const result = await this.coinToolsContractInstance?.methods.toolEntry(0, this.ethWallet.zeroAddress(), `0x${this.ethWallet.encodeParamsHex(["address"], [this.user])}`).send({
        from: this.user,
        value: requiredFee,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "欢迎加入会员大家庭！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  @withGlobalLoading()
  @wrapPromise()
  async initForHomePage() {
    console.log("进入主页需要加载")
    // 进入主页需要加载的东西

    // 获取所有工具
    // this.tools = await this.coinToolsPublicContractInstance!.methods.getTools(0, 0).call()
    // console.log("tools", this.tools)
  }

  async submmitVintageNewFundProposal(daoAddr: string, currentDateTime: number) {

    const fundRaiseMinTarget = BigInt(10000 * 10 ** 18);
    const fundRaiseMaxCap = BigInt(20000 * 10 ** 18);
    const lpMinDepositAmount = BigInt(1000 * 10 ** 18);
    const lpMaxDepositAmount = BigInt(10000 * 10 ** 18);
    const fundRaiseType = 0; // 0 FCFS 1 Free In
    const proposalFundRaiseInfo = [
      fundRaiseMinTarget,
      fundRaiseMaxCap,
      lpMinDepositAmount,
      lpMaxDepositAmount,
      fundRaiseType // 0 FCFS 1 Free In
    ];
    const blocktimestamp = parseInt((currentDateTime / 1000).toString());

    // params.proposalTimeInfo.startTime < block.timestamp ||
    // params.proposalTimeInfo.endTime <
    // params.proposalTimeInfo.startTime ||
    // params.proposalTimeInfo.fundTerm <= 0 ||
    // params.proposalTimeInfo.redemptPeriod >
    // params.proposalTimeInfo.redemptInterval ||
    // params.proposalTimeInfo.redemptInterval >
    // params.proposalTimeInfo.fundTerm ||
    // params.proposalTimeInfo.returnPeriod >=
    // params.proposalTimeInfo.fundTerm 

    const startTime = blocktimestamp + 60 * 2;
    const endTime = startTime + 60 * 10;
    const fundTerm = 60 * 20;
    const redemptPeriod = 60 * 2;
    const redemptInterval = 60 * 10;
    const returnPeriod = 60 * 10;
    const proposalTimeInfo = [
      startTime,
      endTime,
      fundTerm,
      redemptPeriod,
      redemptInterval,
      returnPeriod
    ];

    const managementFeeRatio = BigInt(0.004 * 10 ** 18);//0.4%
    const returnTokenmanagementFeeRatio = BigInt(0.002 * 10 ** 18);//0.1%
    const redepmtFeeRatio = BigInt(0.002 * 10 ** 18);
    const proposalFeeInfo = [
      managementFeeRatio,
      returnTokenmanagementFeeRatio,
      redepmtFeeRatio
    ];


    const managementFeeAddress = config.Management_Fee_address;
    // const fundRaiseTokenAddress = config.TEST_USDT_Address_XDAI;
    const fundRaiseTokenAddress = config.TEST_RETURN_TOKEN_ADDRESS_XDAI;

    const proposalAddressInfo = [
      managementFeeAddress,
      fundRaiseTokenAddress
    ];

    const fundFromInverstor = BigInt(0.004 * 10 ** 18);
    const projectTokenFromInvestor = BigInt(0.004 * 10 ** 18);
    const proposerReward = [
      fundFromInverstor,
      projectTokenFromInvestor
    ];

    const enalbePriorityDeposit = false;
    const vtype = 3;// 0 erc20 1 erc721 2 erc1155 3 whitelist
    const token = fundRaiseTokenAddress;
    const tokenId = 0;
    const amount = 0;
    const priorityDepositeWhitelist = [
    ];
    const proposalPriorityDepositInfo = [
      enalbePriorityDeposit,
      vtype,
      token,
      tokenId,
      amount,
      priorityDepositeWhitelist
    ];

    const fundRaiseParams = [
      daoAddr,
      proposalFundRaiseInfo,
      proposalTimeInfo,
      proposalFeeInfo,
      proposalAddressInfo,
      proposerReward,
      proposalPriorityDepositInfo
    ];
    console.log(fundRaiseParams);

    try {
      const result = await this.VintageNewFundContractInstance?.methods.submitProposal(
        fundRaiseParams
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async submmitVintageFundingProposal(daoAddr: string, currentDateTime: number) {
    const requestedFundAmount = BigInt(2000 * 10 ** 18);

    // params.vestInfo.vestingStartTime > 0 &&
    // params.vestInfo.vetingEndTime >=
    // params.vestInfo.vestingStartTime &&
    // params.vestInfo.vestingCliffEndTime >=
    // params.vestInfo.vestingStartTime &&
    // params.vestInfo.vestingCliffEndTime <=
    // params.vestInfo.vetingEndTime &&
    // params.vestInfo.vestingInterval > 0,

    const vestingStartTime = currentDateTime + 60 * 10 * 1;
    const vetingEndTime = vestingStartTime + 60 * 60 * 2;
    const vestingCliffEndTime = vestingStartTime + 60 * 20;
    const vestingInterval = 60 * 10;

    const vestingCliffLockAmount = BigInt(0.3 * 10 ** 18);

    const projectTeamTokenAddr = "0xdA844FFE2E922c9B3E6076c308411f748A29a6d1";


    const approver = this.user;
    const escrow = false;
    const price = BigInt(0.3 * 10 ** 18);
    const receiver = this.user;

    const fundingInfo = [
      requestedFundAmount,
      config.TEST_USDT_Address_XDAI,
      receiver
    ];

    const enableVestingNFT = false;
    const returnTokenInfo = [
      escrow,
      projectTeamTokenAddr,
      price,
      "0",
      approver,
      enableVestingNFT,
      receiver
    ];

    const vestingInfo = [
      vestingStartTime,
      vetingEndTime,
      vestingCliffEndTime,
      vestingCliffLockAmount,
      vestingInterval
    ]
    const params = [fundingInfo, returnTokenInfo, vestingInfo]

    try {
      const result = await this.VintageFundingAdapterContractInstance?.methods.submitProposal(daoAddr, params
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async startVintageFundingProposalVoting(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == "" ||
      !proposalId ||
      proposalId == ""
    ) {
      Modal.error({
        content: "daoAddr && proposalId  required"
      })
      return
    }

    try {
      const result = await this.VintageFundingAdapterContractInstance?.methods.startVotingProcess(daoAddr, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "start voting successed!!!"
      })
    } catch (err) {
      console.log(err)
    }

  }

  async executeVintageFundingProposal(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == "" ||
      !proposalId ||
      proposalId == ""
    ) {
      Modal.error({
        content: "daoAddr && proposalId  required"
      })
      return
    }

    try {
      const result = await this.VintageFundingAdapterContractInstance?.methods.processProposal(daoAddr, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "process Proposal successed!!!"
      })
    } catch (err) {
      console.log(err)
    }

  }

  async getParticiapntMembershipInfo(daoAddr: string, name: string) {
    if (!daoAddr
      || daoAddr == "" ||
      !name ||
      name == ""
    ) {
      Modal.error({
        content: "daoAddr && name  required"
      })
      return
    }


    const participantMembershipInfo = await this.flexFundingPoolAdaptContractInstance?.methods.
      getParticipantMembershipInfo(daoAddr, name).call({ from: this.user });
    console.log(participantMembershipInfo);

    this.participantMembershipInfo =
      " created: " + participantMembershipInfo.created.toString() +
      " \r varifyType: " + participantMembershipInfo.varifyType.toString() +
      " \r tokenAddress: " + participantMembershipInfo.tokenAddress.toString() +
      " \r tokenId: " + participantMembershipInfo.tokenId.toString() +
      " \r minHolding: " + participantMembershipInfo.minHolding;
  }

  async approveToken(tokenAddr: string, spender: string, amount: string) {
    if (!spender
      || spender == ""
      || !amount
      || amount == ""
      || !tokenAddr
      || tokenAddr == ""
    ) {
      Modal.error({
        content: "spender address && amount required"
      })
      return
    }
    const erc20Contract = new this.web3Instance!.eth.Contract(
      config.Flex_TEST_TKEN_CONTRACT_ABI,
      tokenAddr
    );

    try {
      const result = await erc20Contract?.methods.approve(
        spender, amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "approve succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async getPoolBalanceByProposalId(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    const bal = await this.flexFundingPoolAdaptContractInstance?.methods.getTotalFundByProposalId(daoAddr, proposalId).call({ from: this.user });
    console.log(bal);
    this.poolBalance = this.web3Instance!.utils.fromWei(bal);
  }

  async getVintagePoolBalance(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""

    ) {
      Modal.error({
        content: "dao address  required"
      })
      return
    }

    const bal = await this.VintageFundingPoolAdapterContractInstance?.methods.poolBalance(daoAddr).call({ from: this.user });
    console.log(bal);
    this.poolBalance = this.web3Instance!.utils.fromWei(bal);
  }

  async getPollVoteValue(daoAddr: string, proposalId: string, voter: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
      || !voter
      || voter == ""
    ) {
      Modal.error({
        content: "dao address && proposalId && voter quired"
      })
      return
    }

    const vote = await this.flexPollingVotingContractInstance?.methods.votes(daoAddr, proposalId).call({ from: this.user })
    console.log(vote);
    console.log(vote.votes)
    this.voteValue = vote.votes(voter);
  }

  async getFundingProposalInfo(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    const proposalInfo = await this.flexFundingContractInstance?.methods.
      Proposals(daoAddr, proposalId).call({ from: this.user });
    this.fundingProposalInfo =
      " tokenRewardAmount: " + proposalInfo.proposerRewardInfo.tokenRewardAmount.toString() +
      " \r cashRewardAmount: " + proposalInfo.proposerRewardInfo.cashRewardAmount.toString() +
      " \r returnTokenAmount: " + proposalInfo.fundingInfo.returnTokenAmount.toString() +
      " \r price: " + proposalInfo.fundingInfo.price.toString() +
      " \r startVoteTime: " + proposalInfo.startVoteTime.toString() +
      " \r stopVoteTime: " + proposalInfo.stopVoteTime.toString();
  }

  async getVintageFundingProposalInfo(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    const proposalInfo = await this.VintageFundingAdapterContractInstance?.methods.
      proposals(daoAddr, proposalId).call({ from: this.user });
    this.fundingProposalInfo =
      " tokenRewardAmount: " + proposalInfo.proposalReturnTokenInfo.escrow.toString() +
      " \r returnToken: " + proposalInfo.proposalReturnTokenInfo.returnToken.toString() +
      " \r returnTokenAmount: " + BigInt(proposalInfo.proposalReturnTokenInfo.returnTokenAmount.toString()) / BigInt(10 ** 18) +
      " \r approveOwnerAddr: " + proposalInfo.proposalReturnTokenInfo.approveOwnerAddr.toString() +
      " \r state: " + proposalInfo.status
      ;
  }

  async getVintageFrontProposalId(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }

    const proposalId = await this.VintageFundingAdapterContractInstance?.methods.
      getFrontProposalId(daoAddr).call({ from: this.user });
    console.log(proposalId);
    this.vintageFrontProposalId = proposalId;
  }

  async getVintageProposalQueueLength(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    // const queue = await this.VintageFundingAdapterContractInstance?.methods.
    //   proposalQueue(daoAddr).call({ from: this.user });
    // console.log(queue);
    const length = await this.VintageFundingAdapterContractInstance?.methods.
      getQueueLength(daoAddr).call({ from: this.user });
    console.log(length);
    // this.vintageFrontProposalId = proposalId;
  }

  async getVintageEscrowReturnTokenAmount(daoAddr: string, proposalId: string, approver: string) {
    const amount = await this.VintageFundingAdapterContractInstance?.methods.projectTeamLockedTokens(daoAddr, proposalId, approver).call({ from: this.user });
    console.log(amount / 10 ** 18);
  }
  async getFlexEscrowReturnTokenAmount(daoAddr: string, proposalId: string, approver: string) {
    const amount = await this.flexFundingContractInstance?.methods.escrowedTokens(daoAddr, proposalId, approver).call({ from: this.user });
    console.log(amount / 10 ** 18);
  }

  async getFlexProtocolFeeAddress() {
    const addr = await this.flexFundingContractInstance?.methods.protocolAddress().call({ from: this.user });
    console.log(addr);
  }

  async getVestInfo(vestId: string) {
    if (!vestId
      || vestId == ""
    ) {
      Modal.error({
        content: "vestId required"
      })
      return
    }


    const vestInfo = await this.flexVestingContractInstance?.methods.
      vests(vestId).call({ from: this.user });
    console.log(vestInfo);
    this.vestInfo =
      " proposalId: " + vestInfo.proposalId.toString() +
      " \r owner: " + vestInfo.owner.toString() +
      " \r recipient: " + vestInfo.recipient.toString() +
      " \r token: " + vestInfo.token.toString() +
      " \r start: " + vestInfo.start.toString() +
      " \r end: " + vestInfo.end.toString() +
      " \r cliffDuration: " + vestInfo.cliffDuration.toString() +
      " \r steps: " + vestInfo.steps.toString() +
      " \r cliffShares: " + vestInfo.cliffShares / 10 ** 18 +
      " \r stepShares: " + vestInfo.stepShares / 10 ** 18 +
      " \r claimed: " + vestInfo.claimed / 10 ** 18;
  }

  async getERC20Balance(token: string, account: string) {
    if (!token
      || token == ""
      || !account
      || account == ""
    ) {
      Modal.error({
        content: "token address && account required"
      })
      return
    }

    this.ERC20ContractInstance =
      new this.web3Instance!.eth.Contract(config.Flex_TEST_TKEN_CONTRACT_ABI,
        token);
    const bal = await this.ERC20ContractInstance?.methods.balanceOf(account).call({ from: this.user });
    this.erc20Balance = this.web3Instance!.utils.fromWei(bal);

  }

  async getAllowance(token: string, approver: string, spender: string) {
    if (!token
      || token == ""
      || !approver
      || approver == ""
      || !spender
      || spender == ""
    ) {
      Modal.error({
        content: "token address && approver  && spender required"
      })
      return
    }

    this.ERC20ContractInstance =
      new this.web3Instance!.eth.Contract(config.Flex_TEST_TKEN_CONTRACT_ABI,
        token);
    const allowance = await this.ERC20ContractInstance?.methods.allowance(approver, spender).call({ from: this.user });
    console.log(allowance)
    this.erc20Allowance = this.web3Instance!.utils.fromWei(allowance);
  }

  async getAdapterAddress(daoAddr: string, adapterId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !adapterId
      || adapterId == ""
    ) {
      Modal.error({
        content: "dao address && account && adapterId quired"
      })
      return
    }
    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);

    const rel = await dao?.methods.getAdapterAddress(adapterId).call({ from: this.user });
    this.adapterAddress = rel;
  }

  async getDaoConfigValue(daoAddr: string, configId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !configId
      || configId == ""
    ) {
      Modal.error({
        content: "dao address && account && configId quired"
      })
      return
    }
    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);

    const rel = await dao?.methods.getConfiguration(configId).call({ from: this.user });
    this.daoConfigValue = rel;
  }

  async getCurrentIds(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);
    console.log(dao);
    const currentfundingId = await dao?.methods.getCurrentFundingProposalId().call({ from: this.user });
    console.log(currentfundingId);
    const currentgovenorinId = await dao?.methods.getCurrentGovenorInProposalId().call({ from: this.user });
    const currentgovenoroutId = await dao?.methods.getCurrentGovenorOutProposalId().call({ from: this.user });
    const currentnewfundId = await dao?.methods.getCurrentNewFundProposalId().call({ from: this.user });

    this.fundingProposalInfo =
      " currentfundingId: " + currentfundingId.toString() +
      " \r currentgovenorinId: " + currentgovenorinId.toString() +
      " \r currentgovenoroutId: " + currentgovenoroutId.toString() +
      " \r currentnewfundId: " + currentnewfundId.toString();

  }

  async getDaoAddressConfigValue(daoAddr: string, configId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !configId
      || configId == ""
    ) {
      Modal.error({
        content: "dao address && configId require"
      })
      return
    }
    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);

    const rel = await dao?.methods.getAddressConfiguration(configId).call({ from: this.user });
    this.daoAddressConfigValue = rel;
  }

  async getCreatedFundCounter(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    console.log(daoAddr);
    this.vintageCreatedFundCounter = await this.VintageNewFundContractInstance?.methods.createdFundCounter(daoAddr).call({ from: this.user });
  }

  async getVintageFundRaiseState(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }

    const fundRaiseState = await this.VintageFundingPoolAdapterContractInstance?.methods.daoFundRaisingStates(daoAddr).call({ from: this.user });
    console.log(fundRaiseState);
    this.fundRaiseState = fundRaiseState;
  }


  async processFundRaise(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    try {
      const result = await this.VintageFundingPoolAdapterContractInstance?.methods.processFundRaise(daoAddr).send({ from: this.user });
      // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "processFundRaise succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }

  }


  async getVintageFundReceiveToken(daoAddr: string) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }

    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);
    const vintageFundingPoolExtAddr = await dao?.methods.getExtensionAddress("0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f")
      .call({ from: this.user });
    console.log(vintageFundingPoolExtAddr);
    const fundingPoolExt = new this.web3Instance!.eth.Contract(config.Vintage_Funding_Pool_Extension_ABI,
      vintageFundingPoolExtAddr);
    this.vintageFundToken = await fundingPoolExt?.methods.getFundRaisingTokenAddress().call({ from: this.user });
  }


  async getAllocAmount(daoAddr: string, proposalId: string, account: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
      || !account
      || account == "") {
      Modal.error({
        content: "dao address && account && proposalId quired"
      })
      return
    }
    const allocInfo = await this.flexAllocContractInstance?.methods.vestingInfos(
      daoAddr,
      proposalId,
      account
    ).call({ from: this.user });
    const amount = allocInfo.tokenAmount;
    this.allocatedAmount = this.web3Instance!.utils.fromWei(amount);
  }

  async getDepositBalance(daoAddr: string, proposalId: string, account: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
      || !account
      || account == "") {

      Modal.error({
        content: "dao address && proposalId && account quired"
      })
      return
    }

    const bal = await this.flexFundingPoolAdaptContractInstance?.methods.
      balanceOf(daoAddr, proposalId, account).call({ from: this.user });
    console.log(bal);
    this.depositBalance = this.web3Instance!.utils.fromWei(bal);
  }

  async getVintageDepositBalance(daoAddr: string, account: string) {
    if (!daoAddr
      || daoAddr == ""
      || !account
      || account == "") {

      Modal.error({
        content: "dao address && account quired"
      })
      return
    }

    const bal = await this.VintageFundingPoolAdapterContractInstance?.methods.
      balanceOf(daoAddr, account).call({ from: this.user });
    console.log(bal);
    this.depositBalance = this.web3Instance!.utils.fromWei(bal);
  }

  async getVintageEscrowBalance(daoAddr: string, fundRound: number, account: string) {
    if (!daoAddr
      || daoAddr == ""
      || !account
      || account == "") {

      Modal.error({
        content: "dao address && account quired"
      })
      return
    }

    const bal = await this.VintageEscrowFundContractInstance?.methods.
      getEscrowAmount(daoAddr, fundRound, account).call({ from: this.user });
    console.log(bal[0]);
    console.log(bal[1]);
    this.depositBalance = this.web3Instance!.utils.fromWei(bal[1]);
  }

  async getVestingClaimableValue(vestId: number) {
    if (!vestId
      || vestId == 0) {
      Modal.error({
        content: " vestId quired"
      })
      return
    }
    const valueInWei = await this.flexVestingContractInstance?.methods.
      vestBalance(vestId).call({ from: this.user });
    this.vestingClaimableValue = this.web3Instance!.utils.fromWei(valueInWei);
  }

  async withdrawFromVest(daoAddr: string, vestId: number) {
    if (!daoAddr
      || daoAddr == ""
      || !vestId
      || vestId == 0) {
      Modal.error({
        content: "dao address && vestId quired"
      })
      return
    }
    try {
      const result = await this.flexVestingContractInstance?.methods.withdraw(
        daoAddr,
        vestId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "withdraw succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async createVest(
    daoAddr: string,
    recipientAddr: string,
    proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == ""
      || !recipientAddr
      || recipientAddr == "") {
      Modal.error({
        content: "dao address && recipientAddr && proposalId quired"
      })
      return
    }
    try {
      const result = await this.flexVestingContractInstance?.methods.createVesting(
        daoAddr,
        recipientAddr,
        proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "vesting created！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }


  async getPollVoteResult(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == "") {

      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    const rel = await this.flexPollingVotingContractInstance?.methods.voteResult(daoAddr, proposalId).call({ from: this.user, });
    console.log(rel);
    this.PollVoteResult = rel;
  }

  async getVintageVoteResult(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == "") {

      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    const rel = await this.VintageVotingContractInstance?.methods.voteResult(daoAddr, proposalId).call({ from: this.user, });
    console.log(rel);
    this.vintageVotingResult = rel.state;
  }

  async getVintageVotingWeight(daoAddr: string, account: string) {
    if (!daoAddr
      || daoAddr == ""
      || !account
      || account == "") {

      Modal.error({
        content: "dao address && account required"
      })
      return
    }
    const rel = await this.VintageVotingContractInstance?.methods.getVotingWeight(daoAddr, account).call({ from: this.user, });
    console.log(rel);
    this.vintageVotingWeight = rel;
  }

  async getVintageAllVotingWeight(daoAddr: string) {
    if (!daoAddr
      || daoAddr == "") {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    const rel = await this.VintageVotingContractInstance?.methods.getAllRaiserWeight(daoAddr).call({ from: this.user, });
    console.log(rel);
    this.vintageVotingWeight = rel;
  }

  async getStewardProposalInfo(daoAddr: string, proposalId: string) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == "") {

      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    const proposal = await this.stewardContactInstance?.
      methods.proposals(daoAddr, proposalId).call({ from: this.user });
    this.stewardProposalInfo =
      " proposal.id: " + proposal.id.toString() +
      " \d proposal.account: " + proposal.account.toString() +
      " \d proposal.creationTime: " + proposal.creationTime.toString() +
      " \d proposal.stopVoteTime:" + proposal.stopVoteTime.toString() +
      " \d proposal.state: " + proposal.state.toString() +
      " \d proposal.pType: " + proposal.pType.toString();
  }

  async getAllStewards(daoAddr: string) {
    if (!daoAddr
      || daoAddr == "") {

      Modal.error({
        content: "dao address quired"
      })
      return
    }
    var output = '';
    const stewards = await this.stewardContactInstance?.
      methods.getAllSteward(daoAddr).call({ from: this.user });
    if (stewards.length) {
      for (var i = 0; i < stewards.length; i++) {
        output = output + stewards[i].toString() + " \ ";
      }
    }
    this.stewardProposalInfo = output;
  }

  async getAllRaisers(daoAddr: string) {
    if (!daoAddr
      || daoAddr == "") {

      Modal.error({
        content: "dao address quired"
      })
      return
    }
    var output = '';
    const raisers = await this.VintageRiaserContractInstance?.
      methods.getAllRaiser(daoAddr).call({ from: this.user });
    console.log(raisers);
    if (raisers.length) {
      for (var i = 0; i < raisers.length; i++) {
        output = output + raisers[i].toString() + " \ ";
      }
    }
    this.stewardProposalInfo = output;
  }


  async createStream(
    depositAmount: any,
    tokenAddr: string,
    streamStartTime: any,
    streamStopTime: any,
    erc721Addr: string,
    tokenId: any) {
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }

    try {
      const result = await this.vestingContractInstance?.methods.createString(
        depositAmount,
        tokenAddr,
        streamStartTime,
        streamStopTime,
        erc721Addr,
        tokenId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "stream created！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async checkSteward(daoAddr: string, account: string) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    const rel = await this.stewardContactInstance?.methods.isActiveMember(daoAddr, account).call({ from: this.user });
    console.log(rel);
    this.isSteward = rel;
  }

  async checkRaiser(daoAddr: string, account: string) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    const rel = await this.VintageRiaserContractInstance?.methods.isActiveMember(daoAddr, account).call({ from: this.user });
    console.log(rel);
    this.isRaiser = rel;
  }

  async quitSteward(daoAddr: string) {
    if (!daoAddr || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    console.log(daoAddr);
    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);
    const memberAmount = await dao?.methods.getNbMembers().call({ from: this.user });
    console.log("memberAmount: ", memberAmount);
    // dao?.methods.removeMember(this.user).send({ from: this.user });

    try {
      const result = await this.stewardContactInstance?.methods.quit(
        daoAddr
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "steward quited！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async deposit(daoAddr: string, proposalId: string, amount: number) {
    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == "") {

      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    if (amount <= 0) {
      Modal.error({
        content: "amount msut > 0"
      })
      return
    }

    const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
      daoAddr);
    const flexFundingPoolAdaptAddr = await dao?.methods.getAdapterAddress("0x2207fd6117465cefcba0abc867150698c0464aa41a293ec29ca01b67a6350c3c")
      .call({ from: this.user });
    await this.TestUSDTContractInstance?.methods.approve(flexFundingPoolAdaptAddr, amount).send({ from: this.user });

    try {
      const result = await this.flexFundingPoolAdaptContractInstance?.methods.deposit(
        daoAddr,
        proposalId,
        amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "deposit succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }


  async VintageDeposit(daoAddr: string, amount: number) {
    if (!daoAddr
      || daoAddr == ""
      || !amount
    ) {

      Modal.error({
        content: "dao address && amount required"
      })
      return
    }
    if (amount <= 0) {
      Modal.error({
        content: "amount msut > 0"
      })
      return
    }

    // const dao = new this.web3Instance!.eth.Contract(config.DAO_REGISTRY_ABI,
    //   daoAddr);
    // const vintageFundingPoolAdaptAddr = await dao?.methods.getAdapterAddress("0xaaff643bdbd909f604d46ce015336f7e20fee3ac4a55cef3610188dee176c892")
    //   .call({ from: this.user });
    // console.log(vintageFundingPoolAdaptAddr);
    // await this.TestUSDTContractInstance?.methods.approve(config.Vintage_Funding_Pool_Adapter_Contract_XDAI, amount).send({ from: this.user });
    await this.TestReturnTokenContractInstance?.methods.approve(config.Vintage_Funding_Pool_Adapter_Contract_XDAI, amount).send({ from: this.user });
    console.log("approved");
    try {
      const result = await this.VintageFundingPoolAdapterContractInstance?.methods.deposit(
        daoAddr,
        amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "deposit succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }
  async withdrawFromFundingPool(daoAddr: string, proposalId: string, amount: number) {
    console.log(daoAddr);
    console.log(proposalId);
    console.log(amount);

    if (!daoAddr
      || daoAddr == ""
      || !proposalId
      || proposalId == "") {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    if (amount <= 0) {
      Modal.error({
        content: "amount msut > 0"
      })
      return
    }
    try {
      const result = await this.flexFundingPoolAdaptContractInstance?.methods.withdraw(
        daoAddr,
        proposalId,
        amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "withdraw succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async withdrawFromVintageFundingPool(daoAddr: string, amount: number) {

    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    if (amount <= 0) {
      Modal.error({
        content: "amount msut > 0"
      })
      return
    }
    try {
      const result = await this.VintageFundingPoolAdapterContractInstance?.methods.withdraw(
        daoAddr,
        amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "withdraw succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async vinageClearFund(daoAddr: string) {

    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }

    try {
      const result = await this.VintageFundingPoolAdapterContractInstance?.methods.clearFund(daoAddr).send({ from: this.user, });
      console.log("result", result)
      Modal.success({
        content: "vinageClearFund succeed！！！"
      })
    } catch (err) {
      console.log(err);
    }
  }

  async withdrawFromVintageEscrowFund(daoAddr: string, fundRound: number) {
    if (!daoAddr
      || daoAddr == ""
    ) {
      Modal.error({
        content: "dao address required"
      })
      return
    }
    if (fundRound <= 0) {
      Modal.error({
        content: "fundRound msut > 0"
      })
      return
    }
    console.log("daoAddr: ", daoAddr);
    console.log("fundRound: ", fundRound);

    try {
      const result = await this.VintageEscrowFundContractInstance?.methods.withDraw(
        daoAddr,
        fundRound
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "withdraw succeed！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async getTestNFTBalance() {
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }
    return await this.testNFTContractInstance!.methods.balanceOf(this.user).
      call({
        from: this.user,
      })
  }

  async getUserTokenIds() {
    const balance = await this.testNFTContractInstance!.methods.balanceOf(this.user).
      call({
        from: this.user,
      });
    let ids
  }

  async submmitStewardInProposal(daoAddr: string, account: string) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.stewardContactInstance?.methods.submitSteWardInProposal(
        daoAddr,
        account
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async submmitRaiserInProposal(daoAddr: string, account: string, allocationValue: number) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.VintageRiaserContractInstance?.methods.submitRaiserInProposal(
        daoAddr,
        account,
        allocationValue
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async submmitStewardOutProposal(daoAddr: string, account: string) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.stewardContactInstance?.methods.submitSteWardOutProposal(
        daoAddr,
        account
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async submmitRaiserOutProposal(daoAddr: string, account: string) {
    if (!daoAddr || daoAddr == "" || !account || account == ""
    ) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.VintageRiaserContractInstance?.methods.submitSteWardOutProposal(
        daoAddr,
        account
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async processStewardProposal(daoAddress: string, proposalId: string) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.stewardContactInstance?.methods.processProposal(
        daoAddress, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal processed!!!"
      })
    } catch (err) {
      console.log(err)
    }

  }

  async processRaiserProposal(daoAddress: string, proposalId: string) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.VintageRiaserContractInstance?.methods.processProposal(
        daoAddress, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal processed!!!"
      })
    } catch (err) {
      console.log(err)
    }

  }


  async processFundingProposal(daoAddress: string, proposalId: string) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    try {
      const result = await this.flexFundingContractInstance?.methods.processProposal(
        daoAddress, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal processed!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async submitFundingProposal(daoAddress: string, currentDateTime: number) {
    const blocktimestamp = parseInt((currentDateTime / 1000).toString());
    if (!daoAddress || daoAddress == "") {
      {
        Modal.error({
          content: "dao address quired"
        })
        return
      }
    }
    let returnTokenAddr = config.Flex_TEST_RETURN_TOKEN_Address_GOERLI;
    let tokenAddress = config.Flex_TEST_USDT_Address_GOERLI;
    if (this.networkId === "0x13881") {
      returnTokenAddr = config.Flex_TEST_RETURN_TOKEN_Address_MUMBAI;
      tokenAddress = config.Flex_TEST_USDT_Address_MUMBAI;
    } else if (this.networkId === "0x5") {
      returnTokenAddr = config.Flex_TEST_RETURN_TOKEN_Address_GOERLI;
      tokenAddress = config.Flex_TEST_USDT_Address_GOERLI;
    } else { }

    returnTokenAddr = config.Flex_TEST_RETURN_TOKEN_Address_XDAI;
    tokenAddress = config.Flex_TEST_USDT_Address_XDAI;
    let minFundingAmount = this.web3Instance!.utils.toWei("1000");
    let maxFundingAmount = this.web3Instance!.utils.toWei("2000");
    let escrow = true;
    let returnTokenAmount = this.web3Instance!.utils.toWei("10000");
    let price = this.web3Instance!.utils.toWei("0.5");
    let minReturnAmount = this.web3Instance!.utils.toWei("20000");
    let maxReturnAmount = this.web3Instance!.utils.toWei("200000");
    let approverAddr = "0xDF9DFA21F47659cf742FE61030aCb0F15f659707";
    let recipientAddr = "0xDF9DFA21F47659cf742FE61030aCb0F15f659707";

    let fundingInfo = [
      tokenAddress,
      minFundingAmount,
      maxFundingAmount,
      escrow,
      returnTokenAddr,
      returnTokenAmount,
      price,
      minReturnAmount,
      maxReturnAmount,
      approverAddr,
      recipientAddr
    ];

    let vestingStartTime = blocktimestamp + 60 * 60 * 12;
    let vestingCliffEndTime = vestingStartTime + 60 * 60 * 1;
    let vestingEndTime = vestingCliffEndTime + 60 * 60 * 2 + 60;
    let vestingInterval = 60 * 60 * 1;
    let vestingCliffLockAmount = this.web3Instance!.utils.toWei("0.1"); // 10%
    const vestNFTEnable = true;
    const nftToken = config.Flex_Vesting_ERC721_XDAI;
    const vestName = "flex vesting";
    const vestDescription = "a flex vesting";

    let vestInfo = [
      vestingStartTime,
      vestingCliffEndTime,
      vestingEndTime,
      vestingInterval,
      vestingCliffLockAmount,
      vestNFTEnable,
      nftToken,
      vestName,
      vestDescription
    ];

    let fundRaiseType = 1;
    let fundRaiseStartTime = blocktimestamp;
    let fundRaiseEndTime = fundRaiseStartTime + 60 * 5;
    let minDepositAmount = this.web3Instance!.utils.toWei("1000");
    let maxDepositAmount = this.web3Instance!.utils.toWei("2000");
    let backerIdentification = false;

    let bType = 0;
    let bChainId = 1;
    let bTokanAddr = "0x4fca7dEf684C9eA41729D852F16014fc796b15Bb";
    let bTokenId = 1;
    let bMinHoldingAmount = 100;
    let bakckerIdentificationInfo = [
      bType,
      bChainId,
      bTokanAddr,
      bTokenId,
      bMinHoldingAmount
    ];

    let priorityDeposit = false;

    let pType = 0;
    let pTokenAddr = config.Flex_TEST_USDT_Address_XDAI;
    let pTokenId = 1;
    let pMinHolding = 10;
    const enablePriorityDeposit = false;
    let priorityDepositInfo = [
      enablePriorityDeposit,
      pType,
      pTokenAddr,
      pTokenId,
      pMinHolding
    ];

    let fundRaiseInfo = [
      fundRaiseType,
      fundRaiseStartTime,
      fundRaiseEndTime,
      minDepositAmount,
      maxDepositAmount,
      backerIdentification,
      bakckerIdentificationInfo,
      priorityDepositInfo
    ];

    let tokenRewardAmount = this.web3Instance!.utils.toWei("0.02");// 2%
    let cashRewardAmount = this.web3Instance!.utils.toWei("0.003");// 0.3%
    let proposerRewardInfos = [
      tokenRewardAmount,
      cashRewardAmount
    ];

    const priorityWhitelist = [];

    const fundingParams = [
      fundingInfo,
      vestInfo,
      fundRaiseInfo,
      proposerRewardInfos,
      priorityWhitelist
    ];

    console.log("fundingParams ", fundingParams);
    try {
      const result = await this.flexFundingContractInstance?.methods.submitProposal(
        daoAddress, fundingParams
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "proposal submitted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async voteForFundingProposal(daoAddress: string, proposalId: string, voteValue: number) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }
    if (voteValue != 1 && voteValue != 2) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }

    try {
      const result = await this.flexPollingVotingContractInstance?.methods.submitVote(
        daoAddress, proposalId, voteValue
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "voted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async voteForProposal(daoAddress: string, proposalId: string, voteValue: number) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }
    if (voteValue != 1 && voteValue != 2) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.flexVotingContractInstance?.methods.submitVote(
        daoAddress, proposalId, voteValue
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "voted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async setApproveForFlexFundingProposal(daoAddress: string, proposalId: string, token: string, amount: number) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }

    try {
      const result = await this.flexFundingReturnTokenContractInstance?.methods.setFundingApprove(
        daoAddress, proposalId, token, amount
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "seted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async vintageVoting(daoAddress: string, proposalId: string, voteValue: number) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }
    if (voteValue != 1 && voteValue != 2) {
      Modal.error({
        content: "dao address && proposalId quired"
      })
      return
    }
    try {
      const result = await this.VintageVotingContractInstance?.methods.submitVote(
        daoAddress, proposalId, voteValue
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "voted!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }


  async executeProposal(daoAddress: string, proposalId: string) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }
    try {
      const result = await this.flexFundingContractInstance?.methods.processProposal(
        daoAddress, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "executed!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async executeVintageNewFundProposal(daoAddress: string, proposalId: string) {
    if (!daoAddress
      || daoAddress == ""
      || !proposalId
      || proposalId == "") {
      {
        Modal.error({
          content: "dao address && proposalId quired"
        })
        return
      }
    }
    try {
      const result = await this.VintageNewFundContractInstance?.methods.processProposal(
        daoAddress, proposalId
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "executed!!!"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async mintTestNFT() {
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }

    try {
      const result = await this.testNFTContractInstance?.methods.mint(
        1
      ).send({
        from: this.user,
      })  // 直到确认了才会返回
      console.log("result", result)
      Modal.success({
        content: "Minted！！！"
      })
    } catch (err) {
      console.log(err)
    }
  }

  async summonFlexDao(_daoName: string) {
    if (!_daoName || _daoName == "") {
      {
        Modal.error({
          content: "dao name quired"
        })
        return
      }
    }
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }
    let vestingAddr = '';
    let erc721Addr = '';
    let FlexAllocationAdapterContractAddr = '';
    let FlexFundingPoolAdapterContractAddr = '';
    let FlexVotingContractaddr = '';
    let FlexPollingVotingContractAddr = '';
    let FlexFundingAdapterContractAddr = '';
    let bentoboxAddr = '';
    let ManagingContractAddr = '';
    let StewardMangementAddr = '';
    let DaoFac_ADDRESS = '';
    let FlexFundingPoolFactory_ADDRESS = '';
    let FlexStewardAllocationAdapterAddr = '';
    let FlexFundingReturnTokenAdapterAddr = '';
    let flexFreeInEscrowFundAdapterContractAddr = '';
    let flexFundingHelperAdapterContractAddr = '';

    if (this.networkId === "0x13881") {
      vestingAddr = config.Flex_Vesting_MUMBAI;
      erc721Addr = config.FlexERC721_MUMBAI;
      FlexAllocationAdapterContractAddr = config.FlexAllocationAdapterContract_MUMBAI;
      FlexFundingPoolAdapterContractAddr = config.Flex_Funding_Pool_Adapt_Contract_Address_MUMBAI;
      FlexVotingContractaddr = config.Flex_Voting_Adapter_Contract_Address_MUMBAI;
      FlexPollingVotingContractAddr = config.FlexPollVotingContractADDRESS_MUMBAI;
      FlexFundingAdapterContractAddr = config.flexFundingContractAddress_MUMBAI;
      bentoboxAddr = config.FLex_BEN_TO_BOX_MUMBAI;
      ManagingContractAddr = config.FLEX_ManagingContract_MUMBAI;
      StewardMangementAddr = config.stewardMangementContractAddress_MUMBAI;
      DaoFac_ADDRESS = config.DaoFac_ADDRESS_MUMBAI;
      FlexFundingPoolFactory_ADDRESS = config.FlexFundingPoolFactory_ADDRESS_MUMBAI;
    }
    else if (this.networkId === "0x5") {
      vestingAddr = config.Flex_Vesting_GOERLI;
      erc721Addr = config.FlexERC721_GOERLI;
      FlexAllocationAdapterContractAddr = config.FlexAllocationAdapterContract_GOERLI;
      FlexFundingPoolAdapterContractAddr = config.flexFundingPoolAdaptContractAddressGOERLI;
      FlexVotingContractaddr = config.Flex_Voting_Adapter_Contract_Address_GOERLI;
      FlexPollingVotingContractAddr = config.flexPolingVotingContractADDRESSGOERLI;
      FlexFundingAdapterContractAddr = config.flexFundingContractAddressGOERLI;
      bentoboxAddr = config.FLex_BEN_TO_BOX_GOERLI;
      ManagingContractAddr = config.FLEX_ManagingContract_GOERLI;
      StewardMangementAddr = config.stewardMangementContractAddressGOERLI;
      DaoFac_ADDRESS = config.DaoFac_ADDRESS_GOERLI;
      FlexFundingPoolFactory_ADDRESS = config.FlexFundingPoolFactory_ADDRESS_GOERLI;
    }
    else if (this.networkId === "0x64") {
      vestingAddr = config.Flex_Vesting_XDAI;
      erc721Addr = config.FlexERC721_XDAI;
      FlexAllocationAdapterContractAddr = config.FlexAllocationAdapterContract_XDAI;
      FlexFundingPoolAdapterContractAddr = config.flexFundingPoolAdaptContractAddressXDAI;
      FlexVotingContractaddr = config.Flex_Voting_Adapter_Contract_Address_XDAI;
      FlexPollingVotingContractAddr = config.flexPolingVotingContractADDRESSXDAI;
      FlexFundingAdapterContractAddr = config.flexFundingContractAddressXDAI;
      bentoboxAddr = config.FLex_BEN_TO_BOX_XDAI;
      ManagingContractAddr = config.FLEX_ManagingContract_XDAI;
      StewardMangementAddr = config.stewardMangementContractAddressXDAI;
      DaoFac_ADDRESS = config.DaoFac_ADDRESS_XDAI;
      FlexFundingPoolFactory_ADDRESS = config.FlexFundingPoolFactory_ADDRESS_XDAI;
      FlexStewardAllocationAdapterAddr = config.Flex_Steward_Allocation_Adapter_Contract_Address_XDAI;
      FlexFundingReturnTokenAdapterAddr = config.flex_Funding_Return_Token_Adapter_Contract_XDAI;
      flexFreeInEscrowFundAdapterContractAddr = config.flex_Free_In_Escrow_Fund_Adapter_Contract_XDAI;
      flexFundingHelperAdapterContractAddr = config.flex_Funding_Helper_Adapter_Contract_XDAI;
    } else { }

    const daoFactoriesAddress = [
      DaoFac_ADDRESS,
      FlexFundingPoolFactory_ADDRESS
    ];
    const _creator = this.user;

    const enalbeAdapters = [
      {
        id: '0x3c11b775c25636cc8a8e9190d176c127f201e732c93f4d80e9e1d8e36c9d7ecd',//FlexVesting
        addr: vestingAddr,
        flags: 0
      },
      {
        id: '0xfacef1ff9551e6c96f09b108d715442c90dfae3b4f77a7691c0ddff9cef28d35',//FlexERC721
        addr: erc721Addr,
        flags: 0
      },
      {
        id: '0xb0326f8dfc913f537596953a938551c86ac8fe0da74c9a8cd0ee660e627dccc8',//FlexAllocationAdapterContract
        addr: FlexAllocationAdapterContractAddr,
        flags: 0
      },
      {
        id: '0x2207fd6117465cefcba0abc867150698c0464aa41a293ec29ca01b67a6350c3c',//FlexFundingPoolAdapterContract
        addr: FlexFundingPoolAdapterContractAddr,
        flags: 0
      },
      {
        id: '0x0d479c38716a0298633b1dbf1ce145a3fbd1d79ca4527de172afc3bad04a2ba7',//FlexVotingContract
        addr: FlexVotingContractaddr,
        flags: 258
      },
      {
        id: '0x6f48e16963713446db50a1503860d8e1fc3c888da56a85afcaa6dc29503cc610',//FlexPollingVotingContract
        addr: FlexPollingVotingContractAddr,
        flags: 258
      },
      {
        id: '0x7a8526bca00f0726b2fab8c3bfd5b00bfa84d07f111e48263b13de605eefcdda',//FlexFundingAdapterContract
        addr: FlexFundingAdapterContractAddr,
        flags: 770
      },
      {
        id: '0xdfea78be99560632cc4c199ca1b0d68ffe0bbbb07b685976cefc8820374ac73a',// ben to box
        addr: bentoboxAddr,
        flags: 0
      },
      {
        id: '0xb5d1b10526b91c1951e75295138b32c80917c8ba0b96f19926ef2008a82b6511',//ManagingContract
        addr: ManagingContractAddr,
        flags: 59
      },
      {
        id: '0xcad7b0867188190920a10bf710c45443f6358175d56a759e7dc109e6d7b5d753',//StewardMangement
        addr: StewardMangementAddr,
        flags: 2242
      },
      {
        id: '0x37cbe06c1044f98864ea25736326bc1d488e24e5e23781ea2ad64c4069cb9e6e',//flexStewardAllocationAdapter
        addr: FlexStewardAllocationAdapterAddr,
        flags: 0
      },
      {
        id: '0x43f8439a5cef099d0d9a92b15a64e34ff49963bb29d65f63204eda6591b810a1',//flexFundingReturnTokenAdapter
        addr: FlexFundingReturnTokenAdapterAddr,
        flags: 0
      },
      {
        id: '0xeae11da953333a83b6467e2193334fb302549e1a42ad5797082aea1ab6be9120',//flexFreeInEscrowFundAdapterContract
        addr: flexFreeInEscrowFundAdapterContractAddr,
        flags: 0
      },
      {
        id: '0xc8e81510cbc5ec7970040e233b001587da1ea4484a9f7b8710d3322429c2df23',//flexFundingHelperAdapterContract
        addr: flexFundingHelperAdapterContractAddr,
        flags: 0
      }
    ];

    const adapters1 = [
      {
        id: '0xb12a3847d47fefceb164b75823af125f9aa82b76938df0ddf08c04cd314ba37c',
        addr: FlexFundingPoolAdapterContractAddr,//FlexFundingPoolAdapterContract
        flags: 75
      },
      {
        id: '0xb12a3847d47fefceb164b75823af125f9aa82b76938df0ddf08c04cd314ba37c',
        addr: FlexFundingAdapterContractAddr,//FlexFundingAdapterContract
        flags: 26
      }
    ];

    const fundingPollEnable = false;

    const flexDaoParticipantCapInfo = [
      false,//bool enable;
      1//uint256 maxParticipantsAmount;
    ];
    const flexDaoParticipantMembershipEnalbe = false;

    const flexDaoParticipantsMemberships = [
      "", // string name;
      0,// uint8 varifyType;
      "0",  // uint256 minHolding;
      "0x0000000000000000000000000000000000000000", // address tokenAddress;
      0,// uint256 tokenId;
      ['0x0000000000000000000000000000000000000000']//whiteList;

    ];

    const flexDaoPriorityDepositEnalbe = false;

    const flexDaoPriorityDepositMembershipInfo = {
      varifyType: 0,    // uint8 varifyType;
      minHolding: 10000000000000, // uint256 minHolding;
      tokenAddress: "0x0000000000000000000000000000000000000000",// address tokenAddress;
      tokenId: 0,  // uint256 tokenId;
      whiteList: [],   // address[] whiteList;
      priorityPeriod: 0      // uint256 priorityPeriod;
    }

    const flexDaoStewardMembershipInfo = [
      false, // bool enable;
      3, // uint256 varifyType;
      "0", // uint256 minHolding;
      "0x0000000000000000000000000000000000000000",// address tokenAddress;
      0,  // uint256 tokenId;
      [
        "0x540881ECaF34C85EfB352727FC2F9858B19C4b08",
        "0x9ab302974abd84c875343d6beea05309bede2f10"
      ] // address[] whiteList;
    ];

    const flexDaoVotingInfo = [
      3,//eligibilityType 0. ERC20 1. ERC721, 2. ERC1155 3.allocation
      "0xb894560E51dB39c906238b13E84b1822C1e0D604",//tokenAddress
      0,//tokenID
      60 * 10,// uint256 votingPeriod;
      0, // uint8 votingPower;
      60, // uint256 superMajority;
      66, // uint256 quorum;
      0, //supportType
      0 //quorumType
    ];

    const flexDaoPollsterMembershipInfo = [
      3, // uint8 varifyType;0. erc20 1.erc721 2.erc1155 3.whitelist
      10000000000000, // uint256 minHolding;
      "0x0000000000000000000000000000000000000000", // address tokenAddress;
      0, // uint256 tokenId;
      [
        '0x0309d2DC027e0843ab2bC72c69149ad1D746db55',
        "0x764e1631B166aB9c05e4bEF355A4AEB52B77f647",
        "0xDF9DFA21F47659cf742FE61030aCb0F15f659707",
        "0x5E78937e2cB15c8d96FB66B575cdCBdf0Cfa7935"
      ] //address[] whiteList;

    ];

    const flexDaoPollingInfo = [
      60 * 10,// uint256 votingPeriod;
      0,// uint8 votingPower;
      1, // uint256 superMajority;
      1, // uint256 quorum;
      0,   //  uint256 eligibilityType;0. erc20 1.erc721 2.erc1155 3.allocation
      '0xb894560E51dB39c906238b13E84b1822C1e0D604',//   address tokenAddress;
      1,//    uint256 tokenID;
      0,//  uint256 supportType; // 0. YES - NO > X
      0//uint256 quorumType; // 0. YES + NO > X    
    ];

    const flexDaoProposerMembershipInfo = [
      false,
      3,  // uint8 varifyType;
      10000000000000,  // uint256 minHolding;
      "0x0B133Cc91a191d8d83133690019375a362B3886D",  // address tokenAddress;
      0,   // uint256 tokenId;
      [
        '0x0309d2DC027e0843ab2bC72c69149ad1D746db55',
        "0x764e1631B166aB9c05e4bEF355A4AEB52B77f647",
        "0xDF9DFA21F47659cf742FE61030aCb0F15f659707",
        "0x5E78937e2cB15c8d96FB66B575cdCBdf0Cfa7935"
      ]  // address[] whiteList;
    ];
    // const flexDaoManagementfee = 2;
    const flexDaoManagementfee = 2000000000000000;// ethers.parseEther("0.002");// 0.2%
    const returnTokenManagementFee = 2000000000000000;

    const flexDaoGenesisStewards = [
      '0x0309d2DC027e0843ab2bC72c69149ad1D746db55',
      "0x764e1631B166aB9c05e4bEF355A4AEB52B77f647",
      "0xDF9DFA21F47659cf742FE61030aCb0F15f659707",
      "0x5E78937e2cB15c8d96FB66B575cdCBdf0Cfa7935"
    ];

    const allocations = [100, 200, 300, 400, 500];

    const flexDaoInfo = {
      name: _daoName,// string name;
      creator: _creator,  // address creator;
      flexDaoManagementfee: flexDaoManagementfee,   // uint256 flexDaoManagementfee;
      returnTokenManagementFee: returnTokenManagementFee,
      managementFeeAddress: "0x0309d2DC027e0843ab2bC72c69149ad1D746db55",
      flexDaoGenesisStewards: flexDaoGenesisStewards, // address[] flexDaoGenesisStewards;
      allocations: allocations,
      flexDaoFundriaseStyle: 0// uint8 flexDaoFundriaseStyle; // 0 - FCFS 1- Free in
    }

    const flexDaoParams = [
      daoFactoriesAddress, // address[] daoFactoriesAddress;
      enalbeAdapters, // DaoFactory.Adapter[] enalbeAdapters;
      adapters1, // DaoFactory.Adapter[] adapters1;
      fundingPollEnable, // bool fundingPollEnable;
      flexDaoParticipantCapInfo, // flexDaoParticipantCapInfo _flexDaoParticipantCapInfo;
      flexDaoParticipantMembershipEnalbe,
      flexDaoParticipantsMemberships,   // flexDaoParticipantsMemberships _flexDaoParticipantsMemberships;
      flexDaoPriorityDepositEnalbe,
      flexDaoPriorityDepositMembershipInfo,
      flexDaoStewardMembershipInfo, // flexDaoStewardMembershipInfo _flexDaoStewardMembershipInfo;
      flexDaoVotingInfo, // flexDaoVotingInfo _flexDaoVotingInfo;
      flexDaoPollsterMembershipInfo,// flexDaoPollsterMembershipInfo _flexDaoPollsterMembershipInfo;
      flexDaoPollingInfo, // flexDaoPollingInfo _flexDaoPollingInfo;
      flexDaoProposerMembershipInfo, // flexDaoProposerMembershipInfo _flexDaoProposerMembershipInfo;
      flexDaoInfo,    //    flexDaoInfo _flexDaoInfo;
    ];


    // const flexDaoParams = [
    //   [
    //     "0x6833c48C079492cD05B07af51D1A3C994b792603",
    //     "0xA4c563d99aE97A56E54104d1de161FB7f8AB278a"
    //   ],
    //   [
    //     {
    //       "id": "0x3c11b775c25636cc8a8e9190d176c127f201e732c93f4d80e9e1d8e36c9d7ecd",
    //       "addr": "0x00942F10AFF9481F593bD2ec17e021Ca050Efc86",
    //       "flags": 0
    //     },
    //     {
    //       "id": "0xfacef1ff9551e6c96f09b108d715442c90dfae3b4f77a7691c0ddff9cef28d35",
    //       "addr": "0xcd59d08df3eF6687F2a2072FFeA3A786b2189226",
    //       "flags": 0
    //     },
    //     {
    //       "id": "0xb0326f8dfc913f537596953a938551c86ac8fe0da74c9a8cd0ee660e627dccc8",
    //       "addr": "0x97C4a52fd42f58717c533aacEB2Dce80b5022E66",
    //       "flags": 0
    //     },
    //     {
    //       "id": "0x2207fd6117465cefcba0abc867150698c0464aa41a293ec29ca01b67a6350c3c",
    //       "addr": "0xaD2542263D8ff182B058A059E86160E43Ca32E61",
    //       "flags": 0
    //     },
    //     {
    //       "id": "0x0d479c38716a0298633b1dbf1ce145a3fbd1d79ca4527de172afc3bad04a2ba7",
    //       "addr": "0xe8228E826f5f59Baef67bB42f2996ad1B7E16EA2",
    //       "flags": 258
    //     },
    //     {
    //       "id": "0x6f48e16963713446db50a1503860d8e1fc3c888da56a85afcaa6dc29503cc610",
    //       "addr": "0x819d88Bf08d54A06962FD1E153F4B05baBCeBC5f",
    //       "flags": 258
    //     },
    //     {
    //       "id": "0x7a8526bca00f0726b2fab8c3bfd5b00bfa84d07f111e48263b13de605eefcdda",
    //       "addr": "0x18A9F784512CC3183AA20EeBdE89c9a1c8cfd122",
    //       "flags": 770
    //     },
    //     {
    //       "id": "0xdfea78be99560632cc4c199ca1b0d68ffe0bbbb07b685976cefc8820374ac73a",
    //       "addr": "0x8c3827Fd47320940ed234f45C53344c970AEB4F1",
    //       "flags": 0
    //     },
    //     {
    //       "id": "0xb5d1b10526b91c1951e75295138b32c80917c8ba0b96f19926ef2008a82b6511",
    //       "addr": "0x352B3E3426D4A6662655BBFab6CE84F36cC0e9bd",
    //       "flags": 59
    //     },
    //     {
    //       "id": "0xcad7b0867188190920a10bf710c45443f6358175d56a759e7dc109e6d7b5d753",
    //       "addr": "0xa2C4bF6934e2bCc9913253Ff6749365cD35e6816",
    //       "flags": 2242
    //     },
    //     {
    //       "id": "0x37cbe06c1044f98864ea25736326bc1d488e24e5e23781ea2ad64c4069cb9e6e",
    //       "addr": "0xbF15Ce7b531B8CD6881644334E708c7b18a447D9",
    //       "flags": 0
    //     }
    //   ],
    //   [
    //     {
    //       "id": "0xb12a3847d47fefceb164b75823af125f9aa82b76938df0ddf08c04cd314ba37c",
    //       "addr": "0xaD2542263D8ff182B058A059E86160E43Ca32E61",
    //       "flags": 75
    //     },
    //     {
    //       "id": "0xb12a3847d47fefceb164b75823af125f9aa82b76938df0ddf08c04cd314ba37c",
    //       "addr": "0x18A9F784512CC3183AA20EeBdE89c9a1c8cfd122",
    //       "flags": 26
    //     }
    //   ],
    //   false,
    //   [
    //     false,
    //     0
    //   ],
    //   false,
    //   [
    //     "",
    //     0,
    //     "0",
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     []
    //   ],
    //   false,
    //   {
    //     "varifyType": 0,
    //     "minHolding": 0,
    //     "tokenAddress": "0x0000000000000000000000000000000000000000",
    //     "tokenId": 0,
    //     "whiteList": [],
    //     "priorityPeriod": 0
    //   },
    //   [
    //     0,
    //     0,
    //     "0",
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     []
    //   ],
    //   [
    //     3,
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     120,
    //     0,
    //     "1",
    //     "1",
    //     0,
    //     0
    //   ],
    //   [
    //     0,
    //     0,
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     [
    //       "0x0000000000000000000000000000000000000000"
    //     ]
    //   ],
    //   [
    //     0,
    //     0,
    //     0,
    //     0,
    //     0,
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     0,
    //     0
    //   ],
    //   [
    //     false,
    //     0,
    //     "0",
    //     "0x0000000000000000000000000000000000000000",
    //     0,
    //     []
    //   ],
    //   {
    //     "name": "Test-flx-08311",
    //     "creator": "0xCea5E66bec5193e5eC0b049a3Fe5d7Dd896fD480",
    //     "flexDaoManagementfee": "0",
    //     "managementFeeAddress": "0x0000000000000000000000000000000000000000",
    //     "flexDaoGenesisStewards": [
    //       "0xaafc3d907e6ff2225433ae02eaef17514af94fc0"
    //     ],
    //     "allocations": [
    //       "100",
    //       "300"
    //     ],
    //     "flexDaoFundriaseStyle": 0
    //   }
    // ]

    console.log(flexDaoParams);
    try {
      let result: any;

      result = await this.summonDaoContractInstance?.methods.summonFlexDao(
        flexDaoParams
      ).send({
        from: this.user,
      })  // 直到确认了才会返回

      // const result = await this.stewardContactInstance?.methods.
      //   submitSteWardInProposal("0x3c07336fa8d6c3686cedcd20f78fe63141b8829c",
      //     "0x540881ECaF34C85EfB352727FC2F9858B19C4b08").send({
      //       from: this.user,
      //     });  // 直到确认了才会返回

      // result = await this.submitFundingProposal("0xc392e24c78b76155b026adcec186cbd7b8eed7f6");

      // result = await this.voteForFundingProposal("0xc392e24c78b76155b026adcec186cbd7b8eed7f6",
      //   "0x46756e64696e6723390000000000000000000000000000000000000000000000");
      // const result = await this.submitFundingProposal("0x57d405f22e68cd7dc43817e27751944d688abc06");

      // result = await this.processFundingProposal("0xc392e24c78b76155b026adcec186cbd7b8eed7f6",
      //   "0x46756e64696e6723390000000000000000000000000000000000000000000000");

      Modal.success({
        content: "created！！！"
      })
    } catch (err) {
      console.log(err)
    }

  }

  async summonVintageDao(_daoName: string) {
    if (!_daoName || _daoName == "") {
      {
        Modal.error({
          content: "dao name quired"
        })
        return
      }
    }
    if (!this.user) {
      Modal.error({
        content: "请先连接钱包！！！"
      })
      return
    }
    let vintageFundRaiserAddr = '';
    let vintageVotingContractAddr = '';
    let vintageFundingPoolAdapterAddr = '';
    let vintageRiaserManagementAdapterAddr = '';
    let vintageFundingAdapterAddr = '';
    let vintageAllocAdapterAddr = '';
    let vintageVestingContractAddr = '';
    let vintageFundingPoolExtAddr = '';
    let vintageFundingPoolFacAddr = '';
    let vintageSummonDaoContractAddr = '';
    let DaoFac_ADDRESS = '';
    let vintageBenToBox = '';
    let vintageEscrowFundAdapterContract = '';
    let vintageDistributeAdatperContract = '';
    let vintageRaiserAllocationAdapterContract = '';
    let vintageFundingReturnTokenAdapterContract = '';
    if (this.networkId === "0x13881") {
      // vestingAddr = config.Flex_Vesting_MUMBAI;
      // erc721Addr = config.FlexERC721_MUMBAI;
      // FlexAllocationAdapterContractAddr = config.FlexAllocationAdapterContract_MUMBAI;
      // FlexFundingPoolAdapterContractAddr = config.Flex_Funding_Pool_Adapt_Contract_Address_MUMBAI;
      // FlexVotingContractaddr = config.Flex_Voting_Adapter_Contract_Address_MUMBAI;
      // FlexPollingVotingContractAddr = config.FlexPollVotingContractADDRESS_MUMBAI;
      // FlexFundingAdapterContractAddr = config.flexFundingContractAddress_MUMBAI;
      // bentoboxAddr = config.FLex_BEN_TO_BOX_MUMBAI;
      // ManagingContractAddr = config.FLEX_ManagingContract_MUMBAI;
      // StewardMangementAddr = config.stewardMangementContractAddress_MUMBAI;
      // DaoFac_ADDRESS = config.DaoFac_ADDRESS_MUMBAI;
      // FlexFundingPoolFactory_ADDRESS = config.FlexFundingPoolFactory_ADDRESS_MUMBAI;
    }
    else if (this.networkId === "0x5") {
      vintageFundRaiserAddr = config.Vintage_Fund_Raise_Adapter_Contract_GOERLI;
      vintageVotingContractAddr = config.Vintage_Voting_Contract_GOERLI;
      vintageFundingPoolAdapterAddr = config.Vintage_Funding_Pool_Adapter_Contract_GOERLI;
      vintageRiaserManagementAdapterAddr = config.Vintage_Raiser_Management_Contract_GOERLI;
      vintageFundingAdapterAddr = config.Vintage_Funding_Adapter_Contract_GOERLI;
      vintageAllocAdapterAddr = config.Vintage_Allocation_Adapter_Contract_GOERLI;
      vintageVestingContractAddr = config.Vintage_Vesting_GOERLI;
      vintageFundingPoolExtAddr = config.Vintage_Funding_Pool_Extension_GOERLI;
      vintageFundingPoolFacAddr = config.Vintage_Funding_Pool_Factory_GOERLI;
      vintageSummonDaoContractAddr = config.Summon_Vintage_Dao_GOERLI;
      DaoFac_ADDRESS = config.DaoFac_ADDRESS_GOERLI;
      vintageBenToBox = config.Vintage_Ben_To_Box_GOERLI;
      vintageEscrowFundAdapterContract = config.vintage_Escrow_FundAdapter_Contract_GOERLI;
    } else if (this.networkId === "0x64") {
      vintageFundRaiserAddr = config.Vintage_Fund_Raise_Adapter_Contract_XDAI;
      vintageVotingContractAddr = config.Vintage_Voting_Contract_XDAI;
      vintageFundingPoolAdapterAddr = config.Vintage_Funding_Pool_Adapter_Contract_XDAI;
      vintageRiaserManagementAdapterAddr = config.Vintage_Raiser_Management_Contract_XDAI;
      vintageFundingAdapterAddr = config.Vintage_Funding_Adapter_Contract_XDAI;
      vintageAllocAdapterAddr = config.Vintage_Allocation_Adapter_Contract_XDAI;
      vintageVestingContractAddr = config.Vintage_Vesting_XDAI;
      vintageFundingPoolExtAddr = config.Vintage_Funding_Pool_Extension_XDAI;
      vintageFundingPoolFacAddr = config.Vintage_Funding_Pool_Factory_XDAI;
      vintageSummonDaoContractAddr = config.Summon_Vintage_Dao_XDAI;
      DaoFac_ADDRESS = config.DaoFac_ADDRESS_XDAI;
      vintageBenToBox = config.Vintage_Ben_To_Box_XDAI;
      vintageEscrowFundAdapterContract = config.vintage_Escrow_FundAdapter_Contract_XDAI;
      vintageDistributeAdatperContract = config.Vintage_Distribute_Adapter_Contract_Address_XAI;
      vintageRaiserAllocationAdapterContract = config.Vintage_Raiser_Allocation_Adapter_Contract_Address_XDAI;
      vintageFundingReturnTokenAdapterContract = config.Vintage_Funding_Return_Token_Adapter_Contract_Address_XDAI;
    } else { }

    const daoFactoriesAddress = [
      DaoFac_ADDRESS,
      vintageFundingPoolFacAddr
    ];
    const _creator = this.user;

    const enalbeAdapters = [
      {
        id: '0xa837e34a29b67bf52f684a1c93def79b84b9c012732becee4e5df62809df64ed',//fund raise
        addr: vintageFundRaiserAddr,
        flags: 1034
      },
      {
        id: '0xaaff643bdbd909f604d46ce015336f7e20fee3ac4a55cef3610188dee176c892',//FundingPoolAdapterContract
        addr: vintageFundingPoolAdapterAddr,
        flags: 0
      },
      {
        id: '0xd3999c37f8f35da86f802a74f9bf032c4aeb46e49abd9c861f489ef4cb40d0a8',//vintageVotingAdapterContract
        addr: vintageVotingContractAddr,
        flags: 258
      },
      {
        id: '0xd90e10040720d66c9412cb511e3dbb6ba51669248a7495e763d44ab426893efa',//vintageRaiserManagementContract
        addr: vintageRiaserManagementAdapterAddr,
        flags: 6346
      },
      {
        id: '0x0fd8cce4ef00a7a8c0c5f91194bc80f122deefe664dd2a2384687da62ab117d1',//VintageFundingAdapterContract
        addr: vintageFundingAdapterAddr,
        flags: 770
      },
      {
        id: '0x99d271900d627893bad1d8649a7d7eb3501c339595ec52be94d222433d755603',//vintageAllocationAdapterContract
        addr: vintageAllocAdapterAddr,
        flags: 0
      },
      {
        id: '0x8295fbcf0c0d839b7cf11cacb43f22c81604fd9f0e4b295ff1d641ad9dd5786a',//vintageVestingContract
        addr: vintageVestingContractAddr,
        flags: 0
      },
      {
        id: '0xdfea78be99560632cc4c199ca1b0d68ffe0bbbb07b685976cefc8820374ac73a',// ben to box
        addr: vintageBenToBox,
        flags: 0
      },
      {
        id: '0xf03649ccf5cbda635d0464f73bc807b602819fde8d2e1387f87b988bb0e858a3',// vintageEscrowFundAdapterContract
        addr: vintageEscrowFundAdapterContract,
        flags: 0
      },
      {
        id: '0xe1cf6669e8110c379c9ea0aceed535b5ed15ea1db2447ab3fbda96c746d21a1a',// vintageDistrubteAdapterContract
        addr: vintageDistributeAdatperContract,
        flags: 0
      },
      {
        id: '0x1fa6846b165d822fff79e37c67625706652fa9380c2aa49fd513ce534cc72ed4',// vintageRaiserAllocation
        addr: vintageRaiserAllocationAdapterContract,
        flags: 0
      },
      {
        id: '0xde483f9dde6f6b12a62abdfd75010c5234f3ce7693a592507d331ec725f77257',//vintageFundingReturnTokenAdapterContract
        addr: vintageFundingReturnTokenAdapterContract,
        flags: 0
      }
    ];

    const adapters1 = [
      {
        id: '0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f',
        addr: vintageFundingPoolAdapterAddr,//vintageFundingPoolAdapterContract
        flags: 23
      },
      {
        id: '0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f',
        addr: vintageFundingAdapterAddr,//VintageFundingAdapterContract
        flags: 14
      },
      {
        id: '0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f',
        addr: vintageDistributeAdatperContract,// vintageDistrubteAdapterContract
        flags: 22
      }
    ];

    const vintageDaoParticipantCapInfo = [
      true,//bool enable;
      5//uint256 maxParticipantsAmount;
    ];

    const vintageDaoBackerMembershipInfo = [
      1, // bool enable;
      0, // uint256 varifyType //0 ERC20 1 ERC721 2 ERC1155 3 WHITELIS
      "100000000000000000000", // uint256 minHolding; 100
      config.TEST_USDT_Address_XDAI,  // address tokenAddress;
      0,  // uint256 tokenId;
      ['0x0000000000000000000000000000000000000000'] // address[] whiteList;
    ];

    const vintageDaoRaiserMembershipInfo = [
      true, // bool enable;
      0, // uint256 varifyType;
      "100000000000000000000", // uint256 minHolding;
      config.TEST_USDT_Address_XDAI,  // address tokenAddress;
      0,  // uint256 tokenId;
      ['0x0000000000000000000000000000000000000000'] // address[] whiteList;
    ];

    const vintageDaoVotingInfo = [
      3,//eligibilityType 0. ERC20 1. ERC721, 2. ERC1155 3.allocation 4.deposit
      config.TEST_USDT_Address_XDAI,//token address
      0, //tokenid
      0, // uint8 votingPower; 0. quantity 1. log2 2. 1 voter 1 vote
      0,//  uint256 supportType; // 0. - YES / (YES + NO) > X%  1. - YES - NO > X
      0,//uint256 quorumType; // 0. - (YES + NO) / Total > X% 1. - YES + NO > X
      60, // uint256 support;  
      66, // uint256 quorum;
      60 * 5,// uint256 votingPeriod;
      60 * 5  // uint256 proposalExecutePeriod;
    ];

    const vintageDaoGenesisRaisers = [

    ];
    const allocations = [100, 200, 300];
    const vintageDaoParams = [
      _daoName,
      _creator,
      daoFactoriesAddress, // address[] daoFactoriesAddress;
      enalbeAdapters, // DaoFactory.Adapter[] enalbeAdapters;
      adapters1, // DaoFactory.Adapter[] adapters1;
      vintageDaoParticipantCapInfo,
      vintageDaoBackerMembershipInfo,
      vintageDaoRaiserMembershipInfo,
      vintageDaoVotingInfo,
      vintageDaoGenesisRaisers,
      allocations
    ];

    // const vintageDaoParams = ["va7", "0x9Ab302974aBd84C875343D6BeeA05309BEDE2f10",
    //   ["0xF51A9D626c14c12C91321b30BE033dd84ca2DE21", "0xA6b6ACA60B100AAc8dAB4354222a9E8f5Bd0E281"],
    //   [
    //     { "id": "0xa837e34a29b67bf52f684a1c93def79b84b9c012732becee4e5df62809df64ed", "addr": "0x3aAc9809070fedCA97838ECAdA32a2dD5c37AB6C", "flags": 1034 },
    //     { "id": "0xaaff643bdbd909f604d46ce015336f7e20fee3ac4a55cef3610188dee176c892", "addr": "0x8c4436CCd0f05bECd9d702345f7282DB05418D1b", "flags": 0 },
    //     { "id": "0xd3999c37f8f35da86f802a74f9bf032c4aeb46e49abd9c861f489ef4cb40d0a8", "addr": "0xE160C497A4eF48de6022604fD42340E9c2128454", "flags": 258 },
    //     { "id": "0xd90e10040720d66c9412cb511e3dbb6ba51669248a7495e763d44ab426893efa", "addr": "0xFaeB671057d93EfEdabD026181BbC933b0EbaC87", "flags": 6346 },
    //     { "id": "0x0fd8cce4ef00a7a8c0c5f91194bc80f122deefe664dd2a2384687da62ab117d1", "addr": "0x147C0597dC5E10A6a9D9426D91466F71347e53ea", "flags": 770 },
    //     { "id": "0x99d271900d627893bad1d8649a7d7eb3501c339595ec52be94d222433d755603", "addr": "0x567D6326F400571e3b8A52F448917FA549e0472c", "flags": 0 },
    //     { "id": "0x8295fbcf0c0d839b7cf11cacb43f22c81604fd9f0e4b295ff1d641ad9dd5786a", "addr": "0x9743825d6329BbbEF9A8DbBeb2e94bbb4288842a", "flags": 0 },
    //     { "id": "0xdfea78be99560632cc4c199ca1b0d68ffe0bbbb07b685976cefc8820374ac73a", "addr": "0x8c3827Fd47320940ed234f45C53344c970AEB4F1", "flags": 0 },
    //     { "id": "0xf03649ccf5cbda635d0464f73bc807b602819fde8d2e1387f87b988bb0e858a3", "addr": "0x278F18A79Cb84f5557C58F536Ce4A59e36970A4f", "flags": 0 },
    //     { "id": "0xe1cf6669e8110c379c9ea0aceed535b5ed15ea1db2447ab3fbda96c746d21a1a", "addr": "0x94435dC96Ba2F23e83b62909c07352031d4D425B", "flags": 0 },
    //     { "id": "0x1fa6846b165d822fff79e37c67625706652fa9380c2aa49fd513ce534cc72ed4", "addr": "0xE5D5AEa259fe4B135e2D4a4f9F4B82d733Ee67b8", "flags": 0 }
    //   ],
    //   [
    //     { "id": "0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f", "addr": "0x8c4436CCd0f05bECd9d702345f7282DB05418D1b", "flags": 23 },
    //     { "id": "0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f", "addr": "0x147C0597dC5E10A6a9D9426D91466F71347e53ea", "flags": 14 },
    //     { "id": "0x161fca6912f107b0f13c9c7275de7391b32d2ea1c52ffba65a3c961880a0c60f", "addr": "0x94435dC96Ba2F23e83b62909c07352031d4D425B", "flags": 22 }
    //   ],
    //   [false, 0],
    //   [0, 0, "0", "0x0000000000000000000000000000000000000000", 0, ["0x0000000000000000000000000000000000000000"]],
    //   [false, 0, "0", "0x0000000000000000000000000000000000000000", 0, ["0x0000000000000000000000000000000000000000"]],
    //   [0, "0x0e523901De365a9145c9822943F313b899540dF5", 0, 0, 0, 0, "20", "30", 180, 180],
    //   [],
    //   [100, 100, 100]];

    console.log(vintageDaoParams);
    try {
      let result: any;

      result = await this.summonVintageDaoContractInstance?.methods.summonVintageDao(
        vintageDaoParams
      ).send({
        from: this.user,
      })  // 直到确认了才会返回

      Modal.success({
        content: "created！！！"
      })
    } catch (err) {
      console.log(err)
    }

  }

  @withGlobalLoading()
  @wrapPromise()
  async walletConnect() {
    if (typeof window["ethereum"] !== 'undefined') {
      await this.connectMetamask()
    } else {
      try {
        console.log("准备连接wallet connect")
        this.web3Provider = new WalletConnectProvider(walletConnectConfig)  // 会立马启动一个ws
        // Subscribe to accounts change
        this.web3Provider.once("accountsChanged", (accounts: string[]) => {
          console.log("accountsChanged", accounts);
        });

        // Subscribe to chainId change
        this.web3Provider.once("chainChanged", (chainId: number) => {
          console.log("chainChanged", chainId);
        });

        // Subscribe to networkId change
        this.web3Provider.once("networkChanged", (networkId: number) => {
          console.log("networkChanged", networkId);
        });

        // Subscribe to session connection/open
        this.web3Provider.once("open", () => {
          console.log("open");
        });

        // Subscribe to session disconnection/close
        this.web3Provider.once("close", (code: number, reason: string) => {
          console.log("close", code, reason)
          if (code === 1000) {  // 用户断开连接
            this.afterWalletDisconnectSuccess("wallet_connect")
          }
        });
        const result: string[] = (await this.web3Provider!.enable()) as string[]
        console.log("wallet connect连接成功")
        this.user = result[0]
        this.web3Instance = new Web3(this.web3Provider as any)
        this.coinToolsContractInstance = new this.web3Instance!.eth.Contract(config.coinToolContractAbi, config.coinToolContractAddress);
        console.log("获取到用户:", this.user)
        await this.afterConnectWalletSuccess()
      } catch (err) {  // 用户关掉二维码窗口就会异常
        console.log(err)
      }
    }


  }
}