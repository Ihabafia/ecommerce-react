import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
    '',
    {
        variants: {
            variant: {
                default:
                    'btn btn-primary hover:bg-primary/70',
                natural:
                    'btn btn-neutral font-semibold hover:bg-natural/70 hover:text-white',
                destructive:
                    'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40',
                outline:
                    'border border-input bg-background text-sm font-semibold border-accent hover:bg-primary/10 hover:text-accent-foreground ',
                secondary:
                    'btn btn-secondary text-white font-semibold hover:bg-secondary/70 hover:text-white',
                accent:
                    'btn btn-accent text-white font-semibold hover:bg-accent/70',
                info:
                    'btn btn-info text-white font-semibold hover:bg-info/70',
                success:
                    'btn btn-success text-white font-semibold hover:bg-success/70 hover:text-white',
                warning:
                    'btn btn-warning text-white font-semibold hover:bg-warning/70',
                error:
                    'btn btn-error text-white font-semibold hover:bg-error/70',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline'
            },
            soft: {
                default: '',
                soft: 'btn-soft text-gray-800'
            },
            size: {
                default: 'btn btn-md',
                xs: 'btn btn-xs',
                sm: 'btn btn-xs',
                md: 'btn btn-xs',
                lg: 'btn btn-xs',
                xl: 'btn btn-xs',
                iconMd: 'size-9',
                iconLg: 'size-11'
            }
        },
        defaultVariants: {
            variant: 'default',
            soft: 'default',
            size: 'default'
        }
    }
);

function Button({
                    className,
                    variant,
                    soft,
                    size,
                    asChild = false,
                    ...props
                }: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
    asChild?: boolean
}) {
    const Comp = asChild ? Slot : 'button';

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, soft, className }))}
            {...props}
        />
    );
}

export { Button, buttonVariants };
