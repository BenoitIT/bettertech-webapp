export const HandleClientSearch = (
  value: string,
  data: any[],
  setFilteredData: (val: any[]) => void
) => {
  const filteredData = data.filter(
    (client) =>
      client.clientNames?.toLowerCase().includes(value.toLowerCase()) ||
      client.email?.toLowerCase().includes(value.toLowerCase()) ||
      client.phoneNumber?.toLowerCase().includes(value.toLowerCase()) ||
      client.clientType?.toLowerCase().includes(value) ||
      client.industry?.toLowerCase().includes(value) ||
      client.province?.toLowerCase().includes(value) ||
      client.district?.toLowerCase().includes(value)
  );

  if (filteredData.length > 0) {
    return setFilteredData(filteredData);
  } else {
    return setFilteredData([]);
  }
};

export const HandleActivitytSearch = (
  value: string,
  data: any[],
  setFilteredData: (val: any[]) => void
) => {
  const filteredData = data.filter(
    (activity) =>
      activity.activityName?.toLowerCase().includes(value.toLowerCase()) ||
      activity.price == Number(value)
  );

  if (filteredData.length > 0) {
    return setFilteredData(filteredData);
  } else {
    return setFilteredData([]);
  }
};

export const HandleTransactionsSearch = (
  value: string,
  data: any[],
  setFilteredData: (val: any[]) => void
) => {
  const filteredData = data.filter(
    (transaction) =>
      transaction.date?.toLowerCase().includes(value.toLowerCase()) ||
      transaction.clientName?.toLowerCase().includes(value.toLowerCase()) ||
      transaction.activityName?.toLowerCase().includes(value.toLowerCase()) ||
      transaction.price?.toLowerCase().includes(value) ||
      transaction.status?.toLowerCase().includes(value)
  );

  if (filteredData.length > 0) {
    return setFilteredData(filteredData);
  } else {
    return setFilteredData([]);
  }
};
