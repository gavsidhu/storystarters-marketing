import clsx from 'clsx';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export function Prose({ children, className }: Props) {
  return <div className={clsx(className, 'prose lg:prose-xl')}>{children}</div>;
}
