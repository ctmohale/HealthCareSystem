import { Heading, useTheme } from "@aws-amplify/ui-react";
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';

import {Header} from "./Header";
import './SignInHeader.css';

export function SignUpHeader() {
  const { tokens } = useTheme();

  return (
    <IonCard className="main_card">
      <Heading level={3} padding={`${tokens.space.xl} ${tokens.space.xl} 0`}>
        <Header />
          Create A New Account
      </Heading>
    </IonCard>
  );
}
