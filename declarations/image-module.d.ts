declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const component: React.FC<React.SVGProps<SVGAElement>>;

    export default component;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.gif' {
    const value: string;
    export default value;
}
