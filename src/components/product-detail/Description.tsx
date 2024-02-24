import React from 'react';
import styled from 'styled-components';

function generateKey(text: string, index: number) {
  return `${text}-${index}`;
}

type DescriptionProps = {
  value: string;
}

const Container = styled.div`
  min-height: 1rem;
  line-height: 1.4;
`;

export default function Description({
  value,
}: DescriptionProps) {
  if (!value) { // 공백 문자열이 넘어와도 자리만 차지하는 p 태그가 생기지 않도록
    return null;
  }

  const lines = value.split('\n');

  return (
    <Container>
      { lines.map((line, i) => (<p key={generateKey(line, i)}>{line}</p>)) }
    </Container>
  );
}
