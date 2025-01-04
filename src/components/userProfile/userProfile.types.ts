export type UserProfileProps = {
    name: string;
    logo?: string;
    bio?: string;
    styleConfig?: {
        name?: React.CSSProperties;
        logo?: React.CSSProperties;
        bio?: React.CSSProperties;
    }
};