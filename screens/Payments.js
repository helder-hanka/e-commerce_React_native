import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";
import EmptyMsg from "../components/EmptyMsg";
import PaidItems from "../components/PaidItems";

const Payments = () => {
  const payments = useSelector((state) => state.payments.payments);

  if (!payments.length) {
    return <EmptyMsg text="Pas d'achats à afficher" />;
  }
  return (
    <FlatList
      data={payments}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PaidItems
          totalPrice={item.total}
          date={item.date}
          courseDetails={item}
        />
      )}
    />
  );
};

export default Payments;

const styles = StyleSheet.create({});
