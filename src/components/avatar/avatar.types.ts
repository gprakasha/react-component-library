export type AvatarProps = {
    name: string;
    logo?: string;
    styledConfig?: {
        avatarContainer?: React.CSSProperties;
        image?: React.CSSProperties;
    }
};