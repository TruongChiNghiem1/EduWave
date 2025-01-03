import { ReactNode, useState } from 'react';
import { ConfigProvider, theme } from "antd";
import React, { Context, createContext } from "react";
import vi from 'antd/lib/locale/vi_VN'; // Import locale nếu cần

interface General {
    logo: string;
    point: string;
    welcome: string;
    permissions: string[];
}

interface AppContextType {
    loading: boolean;
    nightMode: boolean;
    general: General;
    setNightMode: React.Dispatch<React.SetStateAction<boolean>>;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    setGeneral: React.Dispatch<React.SetStateAction<General>>;
}

const AppContext: Context<AppContextType | null> = createContext<AppContextType | null>(null);

const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [loading, setLoading] = useState<boolean>(true);
    const [general, setGeneral] = useState<General>({
        logo: '',
        point: '',
        welcome: '',
        permissions: []
    });
    const [nightMode, setNightMode] = useState<boolean>(false);

    const lightTheme = {
        components: {
            Table: {
                borderRadius: 0,
                boxShadow: '5px 8px 24px 5px rgba(208, 216, 243, 0.6)',
                colorTextHeading: '#000000',
                headerBg: '#ddd',
                cellPaddingBlock: 8,
                algorithm: true,
            },
            Input: {
                colorPrimary: 'transparent',
                boxShadow: '1px transparent',
            },
        },
        token: {
            layoutBg: '#f5f5f5',
            lightGrayBg: '#ececec',
            lightGrayBgActive: '#dadada',
            screenLGMax: 1499,
            screenXL: 1500,
            screenXLMin: 1500
        }
    };

    const darkTheme = {
        algorithm: theme.darkAlgorithm,
        token: {
            layoutBg: '#454d55',
            colorBgContainer: '#343a40',
            lightGrayBg: '#212121',
            lightGrayBgActive: '#383838'
        },
        components: {
            Table: {
                borderRadius: 0,
                cellPaddingBlock: 8,
                colorBgContainer: '#0000001a',
            },
            Card: {
                colorBgContainer: '#0000001a',
            },
            Layout: {
                colorBgBody: '#24292e',
            },
            Pagination: {
                colorPrimary: '#525252',
                colorPrimaryHover: '#525252',
            },
        }
    };

    return (
        <AppContext.Provider value={{
            loading,
            nightMode,
            general,
            setNightMode,
            setLoading,
            setGeneral
        }}>
            <ConfigProvider theme={nightMode ? darkTheme : lightTheme} locale={vi}>
                <div className={nightMode ? 'night-mode-layout' : 'light-mode-layout'}>
                    {children}
                </div>
            </ConfigProvider>
        </AppContext.Provider>
    );
}

export default AppProvider;
