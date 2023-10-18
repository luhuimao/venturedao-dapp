/*
 * @Descripttion: 
 * @version: 
 * @Author: huhuimao
 * @Date: 2023-03-05 20:36:49
 * @LastEditors: huhuimao
 * @LastEditTime: 2023-03-10 11:08:36
 */
import { observable } from 'mobx';
import CommonStore from './common_store';
import { withGlobalLoading, wrapPromise } from '../util/decorator';
import HttpRequestUtil from "@pefish/js-util-httprequest"
import { ReturnType } from '../util/type';
import ClipboardJS from "clipboard"

const isWebMediaString = "(min-width: 996px)"
export default class HomeStore {

  private commonStore: CommonStore
  @observable
  public counter = 0;

  private isWebMatchMedia = window.matchMedia(isWebMediaString)
  @observable
  public isWeb = this.isWebMatchMedia.matches
  @observable
  public selectedMenu: string = "Summon_Flex_Dao"

  @observable inviteLinkModalVisible: boolean = false
  @observable becomeVipModalVisible: boolean = false
  @observable clickMeCopyText: string = "点我复制"

  constructor (commonStore: CommonStore) {
    this.commonStore = commonStore

    this.setMediaListeners()
    new ClipboardJS('.btn')
    this.commonStore!.initForHomePage()
  }

  public setMediaListeners () {
    this.isWebMatchMedia.addListener(e => {
      this.isWeb = e.matches
    });
  }

  public setSelectedMemu (key: string) {
    this.selectedMenu = key
  }

  public add () {
    this.counter++
  }

  @withGlobalLoading()
  @wrapPromise()
  public async requestBaidu (): Promise<ReturnType> {
    return await HttpRequestUtil.get("https://www.baidu.com")
  }
}
