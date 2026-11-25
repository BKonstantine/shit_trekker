import { theme, type ThemeConfig } from 'antd';

/**
 * ShitTracker — базовая тёмная тема.
 * Перед использованием убедись, что версия Ant Design поддерживает указанные токены.
 * Передавай в <ConfigProvider theme={shitTrackerTheme}>.
 */
export const shitTrackerTheme: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: '#8655F6',
    colorInfo: '#368CFF',
    colorSuccess: '#25B987',
    colorWarning: '#E5A850',
    colorError: '#F07178',
    colorBgBase: '#0E0F1C',
    colorBgLayout: '#0E0F1C',
    colorBgContainer: '#171927',
    colorBgElevated: '#1B1D2F',
    colorBorder: '#34354F',
    colorText: '#F3F0FA',
    colorTextSecondary: '#ABA7C2',
    borderRadius: 10,
    fontSize: 14,
    controlHeight: 38,
  },
  components: {
    Layout: {
      bodyBg: '#0E0F1C',
      siderBg: '#141525',
      headerBg: '#0E0F1C',
    },
    Menu: {
      darkItemBg: '#141525',
      darkItemSelectedBg: '#352357',
      darkItemSelectedColor: '#F6F2FF',
    },
    Table: {
      headerBg: '#1A1B2C',
      rowHoverBg: '#25223E',
      borderColor: '#2D2E46',
    },
    Button: {
      primaryShadow: 'none',
    },
  },
};
