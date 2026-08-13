// interface erlaubt austauschbare Fähigkeit
interface DeliveryChannel {
  deliver(recipient: string, message: string): void;
}

// implements prüft den Vertrag (keine Vererbung!)
class EmailChannel implements DeliveryChannel {
  deliver(recipient: string, message: string): void {
    console.log(`Email to ${recipient}: ${message}`);
  }
}

class ComposedNotifcation {
  constructor(
    public readonly recipient: string,
    public message: string,
    private channel: DeliveryChannel,
  ) {}

  send(): void {
    this.channel.deliver(this.recipient, this.message);
  }
}

const composedEmail = new ComposedNotifcation(
  "Alexander@example.com",
  "Welcome!",
  new EmailChannel(),
);

composedEmail.send();
