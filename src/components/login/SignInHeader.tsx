import { Heading, useTheme } from "@aws-amplify/ui-react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import {Header} from "./Header";
import './SignInHeader.css';

export function SignInHeader() {
  const { tokens } = useTheme();

  return (
    <IonCard className="main_card">
      <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
        <Header />
          Sign In To Platform
      </Heading>
    </IonCard>
  );
}
