// import {EventsProps} from './EventsTypes.ts'

type LogoProps = {
  className: string;
  // status?: 'loading' | 'error' | 'happened',
  // logos: {
  //   name: string,
  //   url: string
  // }[],
  // children: string,
  // children: React.ReactNode,
  // styles: React.CSSProperties
};
// type LoggedUser = {
//   name: string,
//   url: string
// }

function Logo({ className }: LogoProps) {
  // const [user, setUser] = useState<null | LoggedUser>(null)
  return (
    <svg viewBox="100 100 800 800" fill="currentColor" className={className}>
      {/* <form>{user ? user.name : ""}</form> */}
      <g>
        <polygon fillRule="evenodd" clipRule="evenodd" points="287,740 287,551.693 333,518.016 333,740   " />
        <polygon fillRule="evenodd" clipRule="evenodd" points="697,436.885 697,740 747,740 747,469.031   " />
        <polygon fillRule="evenodd" clipRule="evenodd" points="509,153.84 352,255.972 352,739.974 509,641.088   " />
        <g>
          <polygon
            fillRule="evenodd"
            clipRule="evenodd"
            points="525,652.722 384.323,740 682,740 682,432.49 525,345.562    "
          />
          <polygon fillRule="evenodd" clipRule="evenodd" points="682,303.713 525,207.272 525,322.706 682,411.453    " />
        </g>
      </g>
    </svg>
  );
}

export default Logo;
