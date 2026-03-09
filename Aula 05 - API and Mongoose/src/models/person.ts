import mongoose, { Schema, Document } from 'mongoose';

interface IPerson extends Document {
    name: string;
    lastname: string;
    age: number;
}

const personSchema: Schema = new Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    age: { type: Number, required: true },
});

const Person = mongoose.model<IPerson>('Person', personSchema, 'Person');

export default Person;
