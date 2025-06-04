import * as React from 'react';

import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';


const inputVariants = cva(
    'w-full',
    {
        variants: {
            variant: {
                default:
                    'input input-primary',
                natural:
                    'input input-neutral',
                secondary:
                    'input input-secondary',
                accent:
                    'input input-accent',
                info:
                    'input input-info',
                success:
                    'input input-success',
                warning:
                    'input input-warning',
                error:
                    'input input-error'
            },
            size: {
                default: 'input input-md',
                xs: 'input input-xs',
                sm: 'input input-sm',
                md: 'input input-md',
                lg: 'input input-lg',
                xl: 'input input-xl'
            }
        },
        defaultVariants: {
            variant: 'default',
            size: 'default'
        }
    }
);

function Input({ className, variant, size, type, ...props }: React.ComponentProps<'input'> &
    VariantProps<typeof inputVariants>) {
    return (
        <input
            type={type}
            data-slot="input"
            className={cn(inputVariants({ variant, size, className }))}
            {...props}
        />
    );
}

export { Input };
