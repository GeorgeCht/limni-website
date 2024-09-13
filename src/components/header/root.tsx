export const HeaderRoot = ({
  children,
  ...props
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return <header {...props}>{children}</header>
}
