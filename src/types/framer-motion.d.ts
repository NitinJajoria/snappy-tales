declare module 'framer-motion' {
    import * as React from 'react';

    export interface MotionProps {
        initial?: any;
        animate?: any;
        exit?: any;
        transition?: any;
        variants?: any;
        whileHover?: any;
        whileTap?: any;
        whileInView?: any;
        viewport?: any;
        style?: React.CSSProperties;
        className?: string;
        children?: React.ReactNode;
        onAnimationComplete?: () => void;
    }

    export interface UseInViewOptions {
        once?: boolean;
        amount?: number | 'some' | 'all';
        margin?: string;
        threshold?: number | number[];
    }

    export const motion: {
        div: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLDivElement>>;
        section: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLElement>>;
        h1: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
        h2: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
        h3: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLHeadingElement>>;
        p: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLParagraphElement>>;
        span: React.ForwardRefExoticComponent<MotionProps & React.HTMLAttributes<HTMLSpanElement>>;
        button: React.ForwardRefExoticComponent<MotionProps & React.ButtonHTMLAttributes<HTMLButtonElement>>;
        a: React.ForwardRefExoticComponent<MotionProps & React.AnchorHTMLAttributes<HTMLAnchorElement>>;
        img: React.ForwardRefExoticComponent<MotionProps & React.ImgHTMLAttributes<HTMLImageElement>>;
        [key: string]: any;
    };

    export function useInView<T extends Element = Element>(
        ref: React.RefObject<T | null>,
        options?: UseInViewOptions
    ): boolean;

    export function useAnimation(): any;
    export function useMotionValue(initial: number | string): any;
    export function useTransform(value: any, input: any[], output: any[]): any;
    export function useScroll(options?: any): any;
    export function useSpring(value: any, config?: any): any;

    export const AnimatePresence: React.FC<{
        children?: React.ReactNode;
        mode?: 'wait' | 'sync' | 'popLayout';
        initial?: boolean;
        onExitComplete?: () => void;
    }>;

    export const LazyMotion: React.FC<{
        children: React.ReactNode;
        features: any;
        strict?: boolean;
    }>;

    export const MotionConfig: React.FC<{
        children: React.ReactNode;
        transition?: any;
        reducedMotion?: 'never' | 'always' | 'user';
    }>;

    export function domAnimation(): any;
    export function domMax(): any;
}
