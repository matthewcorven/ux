import { styles } from '../styles/decorators';

@styles()
export class UxCheckboxTheme {
  public effect = 'ripple'; // ripple or none

  public background: string;
  public foreground: string;

  public backgroundDisabled: string;
  public foregroundDisabled: string;
}
