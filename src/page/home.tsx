import React from 'react';
import { inject, observer } from 'mobx-react';
import './home.css'
import {
  Image, Layout, Menu, Button
} from 'antd';
import { ToolOutlined } from '@ant-design/icons';
import HomeStore from '../store/home_store';
import CommonStore from '../store/common_store';


import Footer from '../component/footer';
import Header from '../component/header';
import { toBigInt } from 'ethers';

const { Sider } = Layout;


@inject('homeStore', 'commonStore')
@observer
export default class Home extends React.Component<{
  homeStore?: HomeStore,
  commonStore?: CommonStore,
  [x: string]: any,
}, any> {

  constructor(props) {
    super(props);

    this.state = {
      DEPOSIT_AMOUNT: '',
      TOKENADDRESS: '',
      STARTTIME: '',
      STOPTIME: '',
      ERC721ADDRESS: '',
      TOKENID: '',
      DAO_NAME: '',
      DAO_ADDRESS: '',
      PROPOSALID: '',
      VOTE_VALUE: 1,
      ACCOUNT_ADDRESS: '',
      ACCOUNT1_ADDRESS: '',
      IF_STEWARD: false,
      IF_RAISER: false,
      VEST_ID: '',
      ADAPTER_ID: '',
      CONIFG_ID: '',
      PARTICIPANT_NAME: ''
    }

    this.updateDepositInput = this.updateDepositInput.bind(this);
    this.updateTokenAddressInput = this.updateTokenAddressInput.bind(this);
    this.handleCreateClick = this.handleCreateClick.bind(this);
  }


  updateParticipantMembershipName(event) {
    // Extract the current value of the customer from state
    var name = this.state.PARTICIPANT_NAME;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    name = modifiedValue;

    // Update the state object
    this.setState({
      PARTICIPANT_NAME: name
    });
  }

  updateConfigId(event) {
    // Extract the current value of the customer from state
    var adapterId = this.state.CONIFG_ID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    adapterId = modifiedValue;

    // Update the state object
    this.setState({
      CONIFG_ID: adapterId
    });
  }

  updateAdapterId(event) {
    // Extract the current value of the customer from state
    var adapterId = this.state.ADAPTER_ID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    adapterId = modifiedValue;

    // Update the state object
    this.setState({
      ADAPTER_ID: adapterId
    });
  }

  updateVestId(event) {
    // Extract the current value of the customer from state
    var vestId = this.state.VEST_ID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    vestId = modifiedValue;

    // Update the state object
    this.setState({
      VEST_ID: vestId
    });
  }

  checkIfSteward(daoAddr: string, accountAddr: string) {
    this.props.commonStore?.checkSteward(daoAddr, accountAddr);
    this.setState({
      IF_STEWARD: this.props.commonStore?.isSteward
    })
  }

  checkIfRaiser(daoAddr: string, accountAddr: string) {
    this.props.commonStore?.checkRaiser(daoAddr, accountAddr);
    this.setState({
      IF_RAISER: this.props.commonStore?.isRaiser
    })
  }

  updateProcessStewardProposalID(event) {
    // Extract the current value of the customer from state
    var proposalId = this.state.PROPOSALID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    proposalId = modifiedValue;

    // Update the state object
    this.setState({
      PROPOSALID: proposalId
    });
  }

  udpateAccountAddressInput(event) {
    // Extract the current value of the customer from state
    var AccountAddr = this.state.ACCOUNT_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    AccountAddr = modifiedValue;

    // Update the state object
    this.setState({
      ACCOUNT_ADDRESS: AccountAddr
    });
  }

  udpateAccount1AddressInput(event) {
    // Extract the current value of the customer from state
    var AccountAddr = this.state.ACCOUNT1_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    AccountAddr = modifiedValue;

    // Update the state object
    this.setState({
      ACCOUNT1_ADDRESS: AccountAddr
    });
  }

  udpateStewardQuitDaoAddressInput(event) {
    // Extract the current value of the customer from state
    var daoAddr = this.state.DAO_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoAddr = modifiedValue;

    // Update the state object
    this.setState({
      DAO_ADDRESS: daoAddr
    });
  }

  updateDepositProposalID(event) {
    // Extract the current value of the customer from state
    var proposalId = this.state.PROPOSALID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    proposalId = modifiedValue;

    // Update the state object
    this.setState({
      PROPOSALID: proposalId
    });
  }

  udpateDepositDaoAddressInput(event) {
    // Extract the current value of the customer from state
    var daoAddr = this.state.DAO_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoAddr = modifiedValue;

    // Update the state object
    this.setState({
      DAO_ADDRESS: daoAddr
    });
  }


  updateDepositAmount(event) {
    // Extract the current value of the customer from state
    var depositAmount = this.state.DEPOSIT_AMOUNT;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    depositAmount = modifiedValue;
    depositAmount = BigInt(depositAmount * 10 ** 18);
    // Update the state object
    this.setState({
      DEPOSIT_AMOUNT: depositAmount
    });
  }


  udpateVotingValue(event) {
    // Extract the current value of the customer from state
    var votingValue = this.state.VOTE_VALUE;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    votingValue = modifiedValue;

    // Update the state object
    this.setState({
      VOTE_VALUE: votingValue
    });
  }

  updateExecutingProposalID(event) {
    // Extract the current value of the customer from state
    var proposalId = this.state.PROPOSALID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    proposalId = modifiedValue;

    // Update the state object
    this.setState({
      PROPOSALID: proposalId
    });
  }

  udpateExecutingDaoAddressInput(event) {
    // Extract the current value of the customer from state
    var daoAddr = this.state.DAO_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoAddr = modifiedValue;

    // Update the state object
    this.setState({
      DAO_ADDRESS: daoAddr
    });
  }

  updateVotingProposalID(event) {
    // Extract the current value of the customer from state
    var proposalId = this.state.PROPOSALID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    proposalId = modifiedValue;

    // Update the state object
    this.setState({
      PROPOSALID: proposalId
    });
  }

  udpateVotingDaoAddressInput(event) {
    // Extract the current value of the customer from state
    var daoAddr = this.state.DAO_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoAddr = modifiedValue;

    // Update the state object
    this.setState({
      DAO_ADDRESS: daoAddr
    });
  }

  udpateSubMitFundingProposalDaoAddressInput(event) {
    // Extract the current value of the customer from state
    var daoAddr = this.state.DAO_ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoAddr = modifiedValue;

    // Update the state object
    this.setState({
      DAO_ADDRESS: daoAddr
    });
  }

  udpateDaoNameInput(event) {
    // Extract the current value of the customer from state
    var daoName = this.state.DAO_NAME;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    // Update the customer object's first name
    daoName = modifiedValue;

    // Update the state object
    this.setState({
      DAO_NAME: daoName
    });
  }

  updateTokenAddressInput(event) {
    // Extract the current value of the customer from state
    var tokenaddr = this.state.TOKENADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    tokenaddr = modifiedValue;

    // Update the state object
    this.setState({
      TOKENADDRESS: tokenaddr
    });
  }
  updateDepositInput(event) {
    // Extract the current value of the customer from state
    var deposit = this.state.DEPOSIT;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    deposit = modifiedValue;

    // Update the state object
    this.setState({
      DEPOSIT: deposit
    });
  }

  updateStartTimeInput(event) {
    // Extract the current value of the customer from state
    var startTime = this.state.STARTTIME;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    startTime = modifiedValue;

    // Update the state object
    this.setState({
      STARTTIME: startTime
    });
  }

  updateStopTimeInput(event) {
    // Extract the current value of the customer from state
    var stopTime = this.state.STOPTIME;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    stopTime = modifiedValue;

    // Update the state object
    this.setState({
      STOPTIME: stopTime
    });
  }

  updateErc721AddressInput(event) {
    // Extract the current value of the customer from state
    var erc721Addr = this.state.ERC721ADDRESS;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    erc721Addr = modifiedValue;

    // Update the state object
    this.setState({
      ERC721ADDRESS: erc721Addr
    });
  }

  updateTokenIdInput(event) {
    // Extract the current value of the customer from state
    var tokenId = this.state.TOKENID;

    // Extract the value of the input element represented by `target`
    var modifiedValue = event.target.value;
    console.log(modifiedValue);
    // Update the customer object's first name
    tokenId = modifiedValue;

    // Update the state object
    this.setState({
      TOKENID: tokenId
    });
  }

  async handleCreateClick() {
    console.log(this.state.DEPOSIT);
    console.log(this.state.TOKENADDRESS);
    console.log(this.state.STARTTIME);
    console.log(this.state.STOPTIME);
    console.log(this.state.ERC721ADDRESS);
    console.log(this.state.TOKENID);

    await this.props.commonStore!.createStream(this.state.DEPOSIT,
      this.state.TOKENADDRESS,
      this.state.STARTTIME,
      this.state.STOPTIME,
      this.state.ERC721ADDRESS,
      this.state.TOKENID
    );
  }
  selectMenuContent() {
    if (this.props.homeStore!.selectedMenu === "Deposit") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
          }}>
            <ul>
              <li>  <label>
                DEPOSIT Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li> </ul>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <ul>    <li>
              <label>
                PrposalId: <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
              </label>
            </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.deposit(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.DEPOSIT_AMOUNT);
            }}>Deposit</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Withdraw Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li> </ul>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <ul>    <li>
              <label>
                PrposalId: <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
              </label>
            </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.withdrawFromFundingPool(
                this.state.DAO_ADDRESS,
                this.state.PROPOSALID,
                this.state.DEPOSIT_AMOUNT);
            }}>Withdraw</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>
                <label>
                  Dao Address:
                  <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  PrposalId: <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Account: <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Balance:
                  <input disabled type="text" value={this.props.commonStore?.depositBalance} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.getDepositBalance(
                this.state.DAO_ADDRESS,
                this.state.PROPOSALID,
                this.state.ACCOUNT_ADDRESS);
            }}>Balance</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>
                <label>
                  Dao Address:
                  <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  PrposalId: <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Pool Balance:
                  <input disabled type="text" value={this.props.commonStore?.poolBalance} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.getPoolBalanceByProposalId(
                this.state.DAO_ADDRESS,
                this.state.PROPOSALID);
            }}>Get Pool Balance By ProposalId</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                name:
                <input type="text" onChange={this.updateParticipantMembershipName.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Participant Membership Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.participantMembershipInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getParticiapntMembershipInfo(this.state.DAO_ADDRESS, this.state.PARTICIPANT_NAME)
            }}>Get Participant Membership Info</Button>
          </div>
        </div >
      )
    } else if (this.props.homeStore!.selectedMenu === "Voting") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Vote Value:
                <input type="text" onChange={this.udpateVotingValue.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.voteForFundingProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.VOTE_VALUE)
            }}>Flex Poll Voting</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Vote Result:
                <input disabled type="text" value={this.props.commonStore?.PollVoteResult} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getPollVoteResult(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Poll Voting Result</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Vote Value:
                <input type="text" onChange={this.udpateVotingValue.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.voteForProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.VOTE_VALUE)
            }}>Flex Voting</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Voter:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Voter Value
                <input disabled type="text" value={this.props.commonStore?.voteValue} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getPollVoteValue(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.ACCOUNT_ADDRESS)
            }}>Poll Vote Value</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === "Funding_Proposal") {
      return (
        <div className="menu-content">
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateSubMitFundingProposalDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.submitFundingProposal(this.state.DAO_ADDRESS, Date.now()
              )
            }}>Submit Funding Proposal</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateSubMitFundingProposalDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Token:
                <input type="text" onChange={this.updateTokenAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.setApproveForFlexFundingProposal(this.state.DAO_ADDRESS,
                this.state.PROPOSALID,
                this.state.TOKENADDRESS,
                this.state.DEPOSIT_AMOUNT
              )
            }}>Set Funding Approve</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateExecutingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.executeProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Excute</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Propsal Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.fundingProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getFundingProposalInfo(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Get Funidng Proposal Info</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateExecutingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Approver:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getFlexEscrowReturnTokenAmount(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.ACCOUNT_ADDRESS)
            }}>Get Escrow Return Token Amount</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>            <Button type={`primary`} onClick={() => {
            this.props.commonStore!.getFlexProtocolFeeAddress()
          }}>Get Protocol Fee Address</Button>
          </div>
        </div>)
    } else if (this.props.homeStore!.selectedMenu === "Summon_Flex_Dao") {
      return (
        <div className="menu-content">
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Name:
                <input type="text" onChange={this.udpateDaoNameInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            {/* <span>
              TEST NFT Balance: {this.props.commonStore!.userTestNFTBalance}
            </span> */}
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.summonFlexDao(this.state.DAO_NAME)
            }}>summon</Button>
          </div>
        </div>)
    } else if (this.props.homeStore!.selectedMenu === "Summon_Vintage_Dao") {
      return (
        <div className="menu-content">
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Name:
                <input type="text" onChange={this.udpateDaoNameInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            {/* <span>
              TEST NFT Balance: {this.props.commonStore!.userTestNFTBalance}
            </span> */}
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.summonVintageDao(this.state.DAO_NAME)
            }}>summon</Button>
          </div>
        </div>)
    } else if (this.props.homeStore!.selectedMenu === 'steward_management') {
      return (
        <div className="menu-content">
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <li>
                  <label>  Is Steward</label>       <input type="text" disabled value={this.props.commonStore?.isSteward.toString()} />
                </li>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.checkIfSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Check Steward</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.submmitStewardInProposal(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Submit Steward In Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.submmitStewardOutProposal(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Submit Steward Out Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.processStewardProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Process Steward Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.quitSteward(this.state.DAO_ADDRESS)
            }}>quit</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Propsal Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.stewardProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getStewardProposalInfo(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Get Proposal Info</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Steward List
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.stewardProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getAllStewards(this.state.DAO_ADDRESS)
            }}>Get All Stewards</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === 'Vesting') {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                VestId:
                <input type="text" onChange={this.updateVestId.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Claimable:
                <input disabled type="text" value={this.props.commonStore?.vestingClaimableValue} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getVestingClaimableValue(this.state.VEST_ID)
            }}>Get Claimable</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                VestId:
                <input type="text" onChange={this.updateVestId.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.withdrawFromVest(this.state.DAO_ADDRESS, this.state.VEST_ID)
            }}>Withdraw</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.createVest(
                this.state.DAO_ADDRESS,
                this.state.ACCOUNT_ADDRESS,
                this.state.PROPOSALID)
            }}>Create Vesting</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Vest Id:
                <input type="text" onChange={this.updateVestId.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Vest Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.vestInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVestInfo(this.state.VEST_ID)
            }}>Get Vesting Info</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === 'Allocation') {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateDepositProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Alloc Amount:
                <input disabled type="text" value={this.props.commonStore?.allocatedAmount} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getAllocAmount(
                this.state.DAO_ADDRESS,
                this.state.PROPOSALID,
                this.state.ACCOUNT_ADDRESS
              )
            }}>Get Alloc Amount</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === 'DaoRegistry') {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                AdapterId:
                <input type="text" onChange={this.updateAdapterId.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Adapt Address:
                <input disabled type="text" value={this.props.commonStore?.adapterAddress} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getAdapterAddress(
                this.state.DAO_ADDRESS,
                this.state.ADAPTER_ID
              )
            }}>Get Adapter Address</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ConfigId:
                <input type="text" onChange={this.updateConfigId.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Conifg Value:
                <input disabled type="text" value={this.props.commonStore?.daoConfigValue} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getDaoConfigValue(
                this.state.DAO_ADDRESS,
                this.state.CONIFG_ID
              )
            }}>Get Dao Config Value</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Current Ids
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.fundingProposalInfo}></textarea>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getCurrentIds(
                this.state.DAO_ADDRESS
              )
            }}>Get Current Ids</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === 'TestToken') {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Test ERC20  Address:
                <input type="text" onChange={this.updateTokenAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Spender:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.approveToken(
                this.state.TOKENADDRESS,
                this.state.ACCOUNT_ADDRESS,
                this.state.DEPOSIT_AMOUNT
              )
            }}>Approve</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Test ERC20  Address:
                <input type="text" onChange={this.updateTokenAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Balance:
                <input disabled type="text" value={this.props.commonStore?.erc20Balance} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getERC20Balance(
                this.state.TOKENADDRESS,
                this.state.ACCOUNT_ADDRESS
              )
            }}>Get ERC20 Balance</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Test ERC20  Address:
                <input type="text" onChange={this.updateTokenAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Approver:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Spender:
                <input type="text" onChange={this.udpateAccount1AddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Allowance:
                <input disabled type="text" value={this.props.commonStore?.erc20Allowance} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getAllowance(
                this.state.TOKENADDRESS,
                this.state.ACCOUNT_ADDRESS,
                this.state.ACCOUNT1_ADDRESS
              )
            }}>Get Allowance</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === 'Vintage_Raiser_Management') {
      return (
        <div className="menu-content">
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <li>
                  <label>  Is Raiser</label>       <input type="text" disabled value={this.props.commonStore?.isRaiser.toString()} />
                </li>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.checkIfRaiser(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Check Raiser</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.submmitRaiserInProposal(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS, 0)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Submit Raiser In Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account Address:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.submmitRaiserOutProposal(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
              // this.props.commonStore!.checkSteward(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Submit Raiser Out Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.processStewardProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Process Raiser Proposal</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.quitSteward(this.state.DAO_ADDRESS)
            }}>quit</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Propsal Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.stewardProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getStewardProposalInfo(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Get Proposal Info</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Raiser List
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.stewardProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getAllRaisers(this.state.DAO_ADDRESS)
            }}>Get All Stewards</Button>
          </div>
        </div>
      )
    } else if (this.props.homeStore!.selectedMenu === "Vintage_Voting") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Vote Value:
                <input type="text" onChange={this.udpateVotingValue.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.vintageVoting(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.VOTE_VALUE)
            }}>Vintage Voting</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Vote Result:
                <input disabled type="text" value={this.props.commonStore?.vintageVotingResult} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageVoteResult(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Vintage Voting Result</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Account: <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Voting Weight:
                <input disabled type="text" value={this.props.commonStore?.vintageVotingWeight} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageVotingWeight(this.state.DAO_ADDRESS, this.state.ACCOUNT_ADDRESS)
            }}>Get Vintage Voting Weight</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                All Voting Weight:
                <input disabled type="text" value={this.props.commonStore?.vintageVotingWeight} name="name" />
              </label>
              </li>
            </ul>

            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageAllVotingWeight(this.state.DAO_ADDRESS)
            }}>Get Vintage All Voting Weight</Button>
          </div>
        </div>
      )
    }
    else if (this.props.homeStore!.selectedMenu === "Vintage_New_Fund") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.submmitVintageNewFundProposal(this.state.DAO_ADDRESS, Date.now())
            }}>Submmit New Fund Proposal</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateExecutingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.executeVintageNewFundProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Excute</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  createdFundCounter:
                  <input disabled type="text" value={this.props.commonStore?.vintageCreatedFundCounter} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getCreatedFundCounter(this.state.DAO_ADDRESS)
            }}>getCreatedFundCounter</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  receive token:
                  <input disabled type="text" value={this.props.commonStore?.vintageFundToken} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageFundReceiveToken(this.state.DAO_ADDRESS)
            }}>get receive token</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  fund raise state:
                  <input disabled type="text" value={this.props.commonStore?.fundRaiseState} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageFundRaiseState(this.state.DAO_ADDRESS)
            }}>get fund raise state</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.processFundRaise(this.state.DAO_ADDRESS)
            }}>process fund raise</Button>
          </div>
        </div>
      )
    }
    else if (this.props.homeStore!.selectedMenu === "Vintage_Funding") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.submmitVintageFundingProposal(this.state.DAO_ADDRESS, Date.now())
            }}>Submmit Funding Proposal</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.startVintageFundingProposalVoting(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>start voting</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateVotingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ProposalId:
                <input type="text" onChange={this.updateVotingProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.executeVintageFundingProposal(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Execute Proposal</Button>
          </div>

          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Proposal Id:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Propsal Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.fundingProposalInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageFundingProposalInfo(this.state.DAO_ADDRESS, this.state.PROPOSALID)
            }}>Get Vintage Funidng Proposal Info</Button>
          </div>

          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Proposal ID:
                <input disabled type="text" value={this.props.commonStore?.vintageFrontProposalId} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageFrontProposalId(this.state.DAO_ADDRESS)
            }}>Get Front Proposal</Button>
          </div>

          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Proposal ID:
                <input disabled type="text" value={this.props.commonStore?.vintageFrontProposalId} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageProposalQueueLength(this.state.DAO_ADDRESS)
            }}>Get Queue Length</Button>
          </div>


          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Proposal ID:
                <input type="text" onChange={this.updateProcessStewardProposalID.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                Approver:
                <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getVintageEscrowReturnTokenAmount(this.state.DAO_ADDRESS, this.state.PROPOSALID, this.state.ACCOUNT_ADDRESS)
            }}>Get Escrow Return Token Amount</Button>
          </div>
        </div>
      )
    }
    else if (this.props.homeStore!.selectedMenu === "Vintage_Deposit") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
          }}>
            <ul>
              <li>  <label>
                DEPOSIT Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li> </ul>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.VintageDeposit(this.state.DAO_ADDRESS, this.state.DEPOSIT_AMOUNT);
            }}>Deposit</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Withdraw Amount:
                <input type="text" onChange={this.updateDepositAmount.bind(this)} name="name" />
              </label>
              </li> </ul>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.withdrawFromVintageFundingPool(
                this.state.DAO_ADDRESS,
                this.state.DEPOSIT_AMOUNT);
            }}>Withdraw</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.vinageClearFund(
                this.state.DAO_ADDRESS
              );
            }}>Clear Fund</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>
                <label>
                  Dao Address:
                  <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Account: <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Balance:
                  <input disabled type="text" value={this.props.commonStore?.depositBalance} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.getVintageDepositBalance(
                this.state.DAO_ADDRESS,
                this.state.ACCOUNT_ADDRESS);
            }}>Balance</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>
                <label>
                  Dao Address:
                  <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Pool Balance:
                  <input disabled type="text" value={this.props.commonStore?.poolBalance} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.getVintagePoolBalance(
                this.state.DAO_ADDRESS,
              );
            }}>Get Pool Balance</Button>
          </div>
          <div style={{
            // display: `flex`,
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                name:
                <input type="text" onChange={this.updateParticipantMembershipName.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>Participant Membership Info
                </label>
              </li>
              <li>
                <textarea rows={10} cols={60} disabled value={this.props.commonStore?.participantMembershipInfo}></textarea>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore!.getParticiapntMembershipInfo(this.state.DAO_ADDRESS, this.state.PARTICIPANT_NAME)
            }}>Get Participant Membership Info</Button>
          </div>
        </div >
      )
    }
    else if (this.props.homeStore!.selectedMenu === "Vintage_Escrow_Fund") {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>   <label>
                Dao Address:
                <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
              </label></li>
            </ul>
            <ul>
              <li>  <label>
                found round:
                <input type="text" onChange={this.updateVestId.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.withdrawFromVintageEscrowFund(
                this.state.DAO_ADDRESS,
                this.state.VEST_ID);
            }}>Withdraw</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>
                <label>
                  Dao Address:
                  <input type="text" onChange={this.udpateDepositDaoAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Fund Round:
                  <input type="text" onChange={this.updateVestId.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Account: <input type="text" onChange={this.udpateAccountAddressInput.bind(this)} name="name" />
                </label>
              </li>
            </ul>
            <ul>
              <li>
                <label>
                  Balance:
                  <input disabled type="text" value={this.props.commonStore?.depositBalance} name="name" />
                </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={async () => {
              await this.props.commonStore?.getVintageEscrowBalance(
                this.state.DAO_ADDRESS,
                this.state.VEST_ID,
                this.state.ACCOUNT_ADDRESS);
            }}>Balance</Button>
          </div>
        </div>)
    }
    else if (this.props.homeStore!.selectedMenu === 'Vintage_DAO_INFO') {
      return (
        <div className="menu-content">
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateStewardQuitDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                AdapterId:
                <input type="text" onChange={this.updateAdapterId.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Adapt Address:
                <input disabled type="text" value={this.props.commonStore?.adapterAddress} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getAdapterAddress(
                this.state.DAO_ADDRESS,
                this.state.ADAPTER_ID
              )
            }}>Get Adapter Address</Button>
          </div>
          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ConfigId:
                <input type="text" onChange={this.updateConfigId.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Conifg Value:
                <input disabled type="text" value={this.props.commonStore?.daoConfigValue} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getDaoConfigValue(
                this.state.DAO_ADDRESS,
                this.state.CONIFG_ID
              )
            }}>Get Dao Config Value</Button>
          </div>

          <div style={{
            flexDirection: `column`,
            marginTop: 100
          }}>
            <ul>
              <li>  <label>
                Dao Address:
                <input type="text" onChange={this.udpateExecutingDaoAddressInput.bind(this)} name="name" />
              </label>
              </li>
            </ul>
            <ul>
              <li>  <label>
                ConfigId:
                <input type="text" onChange={this.updateConfigId.bind(this)} name="name" />
              </label>
              </li>
            </ul>

            <ul>
              <li>  <label>
                Address Conifg Value:
                <input disabled type="text" value={this.props.commonStore?.daoAddressConfigValue} name="name" />
              </label>
              </li>
            </ul>
            <Button type={`primary`} onClick={() => {
              this.props.commonStore?.getDaoAddressConfigValue(
                this.state.DAO_ADDRESS,
                this.state.CONIFG_ID
              )
            }}>Get Dao Address Config Value</Button>
          </div>
        </div>
      )
    }
    else {
      return (
        <div className="menu-content">nothing</div>
      )
    }

  }

  render() {
    return (
      <div className="app">
        <Header />
        <div className="content">
          <div className="left-space" style={{
            flex: this.props.homeStore!.isWeb ? 1 : 0
          }}></div>
          <div className="real-content">
            <div style={{
              display: "flex",
              flex: 1,
              flexDirection: "column",
            }}>
              <div className="content-header" style={{
                display: this.props.homeStore!.isWeb ? "flex" : "none"
              }}>
                <div style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center"
                }}>
                  <Image
                    width={46}
                    src="./logo.png"
                  />
                  <span style={{
                    color: "#009a61",
                    marginLeft: 10,
                    fontSize: 28
                  }}>DEMO</span>
                </div>
              </div>
              <Layout className="all-menu-content">
                <Sider
                  breakpoint="lg"
                  collapsedWidth="0"
                  onBreakpoint={broken => {
                    console.log(broken);
                  }}
                  onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                  }}
                  theme="light"
                  style={{
                    backgroundColor: "#333",
                    color: "white",
                  }}
                >
                  <div className="logo" />
                  <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.props.homeStore!.selectedMenu]} style={{
                    backgroundColor: "#333"
                  }} onSelect={(e) => {
                    this.props.homeStore!.setSelectedMemu(e.key as string)
                  }}>
                    <Menu.Item key="Deposit" icon={<ToolOutlined />}>
                      Deposit && Withdraw
                    </Menu.Item>
                    <Menu.Item key="Voting" icon={<ToolOutlined />}>
                      Voting
                    </Menu.Item>
                    <Menu.Item key="Funding_Proposal" icon={<ToolOutlined />}>
                      Funding Proposal
                    </Menu.Item>
                    <Menu.Item key="steward_management" icon={<ToolOutlined />}>
                      Steward Mangement
                    </Menu.Item>
                    <Menu.Item key="Summon_Flex_Dao" icon={<ToolOutlined />}>
                      Summon Flex Dao
                    </Menu.Item>
                    <Menu.Item key="Summon_Vintage_Dao" icon={<ToolOutlined />}>
                      Summon Vintage Dao
                    </Menu.Item>
                    <Menu.Item key="Vesting" icon={<ToolOutlined />}>
                      Vesting
                    </Menu.Item>
                    <Menu.Item key="Allocation" icon={<ToolOutlined />}>
                      Allocation
                    </Menu.Item>
                    <Menu.Item key="DaoRegistry" icon={<ToolOutlined />}>
                      DaoRegistry
                    </Menu.Item>
                    <Menu.Item key="TestToken" icon={<ToolOutlined />}>
                      TestToken
                    </Menu.Item>
                    <Menu.Item key="Vintage_Raiser_Management" icon={<ToolOutlined />}>
                      Raiser Management
                    </Menu.Item>
                    <Menu.Item key="Vintage_Voting" icon={<ToolOutlined />}>
                      Vintage Voting
                    </Menu.Item>
                    <Menu.Item key="Vintage_New_Fund" icon={<ToolOutlined />}>
                      Vintage New Fund Proposal
                    </Menu.Item>
                    <Menu.Item key="Vintage_Funding" icon={<ToolOutlined />}>
                      Vintage Funding Proposal
                    </Menu.Item>
                    <Menu.Item key="Vintage_Deposit" icon={<ToolOutlined />}>
                      Vintage Deposit
                    </Menu.Item>
                    <Menu.Item key="Vintage_Escrow_Fund" icon={<ToolOutlined />}>
                      Vintage Escrow Fund
                    </Menu.Item>
                    <Menu.Item key="Vintage_DAO_INFO" icon={<ToolOutlined />}>
                      Vintage Dao Info
                    </Menu.Item>
                  </Menu>
                </Sider>
                {this.selectMenuContent()}
              </Layout>
            </div>
          </div>
          <div className="right-space" style={{
            flex: this.props.homeStore!.isWeb ? 1 : 0
          }}></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
