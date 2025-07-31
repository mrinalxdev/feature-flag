export type PinMode = 'INPUT' | 'OUTPUT' | 'INPUT_PULLUP';
export type PinValue = number;
export type PinState = { mode : PinMode; value: PinValue}


export interface Component {
    id : string
    type : 'LED' | 'RESISTOR' | 'Button' | 'LDR' | 'Pot';
    pin? : number;
    params? : Record<string, any>;
}

export const emptySketch = `void setup() {
  pinMode(A0, INPUT);
  pinMode(9, OUTPUT);
}

void loop() {
  int val = analogRead(A0);
  analogWrite(9, val / 4);
  delay(50);
}`;