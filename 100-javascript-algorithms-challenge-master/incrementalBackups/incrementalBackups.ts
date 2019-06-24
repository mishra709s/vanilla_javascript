function incrementalBackups(
  lastBackupTime: number,
  changes: number[][]
): number[] {
  const fileIds: number[] = [];
  for (let change of changes) {
    const fileId = change[1];
    const fileBackUpTime = change[0];

    if (fileBackUpTime > lastBackupTime) {
      if (!fileIds.includes(fileId)) {
        fileIdd.push(fileId);
      }
    }
  }
  return fileIds.sort((fileId1, fileId2) => fileId1 - fileId2);
}

console.log(
  incrementalBackups(461620205, [
    [461620203, 1],
    [461620204, 2],
    [461620205, 6],
    [461620206, 5],
    [461620207, 3],
    [461620207, 5],
    [461620208, 1]
  ])
);
