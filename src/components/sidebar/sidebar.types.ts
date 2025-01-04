import { UserProfileProps } from "../userProfile";

export type NavItem = {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
    nested?: NavItem[];
};

export const SidebarPosition = {
    left: 'left',
    right: 'right',
} as const;

export type SidebarProps = {
    sidebarPosition: keyof typeof SidebarPosition;
    sideBarContainerStyle: React.CSSProperties;
    navItems?: Array<NavItem>;
    isOpen: boolean;
    logoutButton: {
        label: string;
        icon: string;
        onClick: () => void;
    };
    settingButton: {
        label: string;
        icon: string;
        onClick: () => void;
    };
    close: () => void;
    userProfileProps: UserProfileProps;
}

export type SideBarContainerProps = {
    sidebarPosition: keyof typeof SidebarPosition;
    isOpen: boolean;
}