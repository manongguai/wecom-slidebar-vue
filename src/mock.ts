import {
  setWxResMock,
  setMockUserId
} from 'wecom-sidebar-jssdk'

// Mock 当前用户 Id
const mockUserId = 'YanHaiXiang'

// 可在这里自由 wx.fn 的内容
const wxResMock: Record<string, any> = window._wxResMock || {
  agentConfig: () => {
    console.log('mock agent config')
  }
}

// 初始化 mockSdk
export const mockSdk = () => {
  // 不手动 setIsMock 时，wecom-sidebar-jssdk 会自动判断当前环境
  // setIsMock(true);
  setWxResMock(wxResMock)
  setMockUserId(mockUserId)
}
