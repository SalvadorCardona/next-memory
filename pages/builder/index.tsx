import { Editor, Frame, Element } from '@craftjs/core';
import {FC, ReactNode} from "react";


interface TextProps {
  text: string
}

export const Text = (props: TextProps) => {
  return (
    <div>
      <p >{props.text}</p>
    </div>
  )
}


interface SlotComponentProps {
  children: ReactNode;
}

const Grid: FC<SlotComponentProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {children}
    </div>
  );
};

interface ContainerProps {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  );
};


export default function builderPage() {
  return (
    <Editor resolver={{Text, Grid, Container}}>
      <Grid>
        <Grid>
          <Frame>
            <Container>
              <Text text="Hi world!" />
              <Container >
                <Text  text="It's me again!" />
              </Container>
            </Container>
          </Frame>
        </Grid>
      </Grid>
    </Editor>
  );
}