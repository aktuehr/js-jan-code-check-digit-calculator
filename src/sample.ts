interface sampleProps {
  sampleString: string;
  sampleNum: number;
}

export const sample = ({ sampleString, sampleNum }: sampleProps) => {
  return `${sampleString}${sampleNum}`;
}
