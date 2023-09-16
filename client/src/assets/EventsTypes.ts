export type EventsProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}