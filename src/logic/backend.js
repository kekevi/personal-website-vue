/* @/logic/backend.js
 * Handles getting input from Google Sheets database.
 * Should also process any special formatting required.
 */

const request = require('request');
const csv = require('csvtojson');

export const getResumeEntries = async () => {
  // \/\/ It seems like Google has broken the json endpoint feature... \/\/

  const resumeDataURL =
    'https://docs.google.com/spreadsheets/d/e/2PACX-1vSEQjETTY10-RjMs7aoEM4V8T3FsEw0pCFtRw55ckUsRx0s74k3on0Icp-BMWzv82HHSKZR2PSiir4-/pub?output=csv';

  // csv()
  //   .fromStream(request.get(resumeDataURL))
  //   // .subscribe((json) => {
  //   //   return new Promise((resolve, reject) => {
  //   //     resolve;
  //   //     reject;
  //   //     console.log(json);
  //   //   });
  //   // });
  //   .then((csvRow) => {
  //     console.error(csvRow);
  //   });

  const rawJsonArray = await csv().fromStream(request.get(resumeDataURL));
  const nullIndex = rawJsonArray.findIndex(
    (row) => row.show === 'FALSE' && row.section === '' && row.main_title === ''
  );
  const jsonArray = rawJsonArray.slice(0, nullIndex).map((row) => {
    return {
      ...row,
      show: row.show === 'TRUE'
    };
  });
  console.log(jsonArray);
  return jsonArray;
};

/**
 * Checks resumeEntry's entry field for new lines (or bullet markers?) and splits
 * them into an array of bullet points
 */
export const processBullets = (resumeEntry) => {
  return resumeEntry;
};
