export type AvatarProps = {
    name: string;
    logo?: string;
    styledConfig?: {
        avatarContainer?: React.CSSProperties;
        image?: React.CSSProperties;
    }
    styleClass?: string;
    size?: AvatarSizes;
};

export type AvatarSizes = 'small' | 'medium' | 'large';