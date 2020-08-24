import React from 'react';
import { Container } from '@material-ui/core'
import './content.css'


export default function CenteredGrid() {
    return (
      <Container maxWidth={false} className="content">
      This is the content.
    </Container>
  );
}
