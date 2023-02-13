import { Schema, model } from 'mongoose';

interface UserInterface {
  name: string;
  email: string;
}

const userSchema = new Schema<UserInterface>({
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const User = model<UserInterface>('User', userSchema);

export default User;