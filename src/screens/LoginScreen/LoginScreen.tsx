import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { Container } from "./styles";
import { PersonRepository } from "../../database/repositories/PersonRepository";
import { useState } from "react";

export function LoginScreen() {
  const [people, setPeople] = useState<any[]>([]);

  async function createPerson() {
    const person = PersonRepository.create({
      createdAt: new Date(),
      firstName: `Person 1`,
      lastName: `Person Lastname 1`,
      age: 10,
    });

    await person.save();

    const peopleSelected = await PersonRepository.find({});
    setPeople(peopleSelected);
  }

  return (
    <Container>
      <FlatList
        data={people}
        renderItem={({ item }) => <Text>{item.firstName}</Text>}
      />

      <TouchableOpacity onPress={createPerson}>
        <Text>Novo</Text>
      </TouchableOpacity>
    </Container>
  );
}
