interface ServerSideComponentProps {
  serverData: string;
}

export default function ServerSideComponent({ serverData }: ServerSideComponentProps) {
  return <div>{serverData}</div>;
}
