const airtableApiKey = 'keyaq8qvfVvDrw04b'
const airtableBaseId = 'app8WfaW9NyKwlL1M'
const airtableTableName = encodeURIComponent('Table 1')

const response = await axios.get(`https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`, {
  headers: {
    Authorization: `Bearer ${airtableApiKey}`
  }
})

const records = _.get(response, 'data.records', [])
const phoneN = workflow.phoneN

const matchingRecord = records.find(record => record.fields.Phone === phoneN)

if (matchingRecord) {
  workflow.roomName = matchingRecord.fields['Room Name']
  // this should allow the variable to be accessed later in the workflow.
}
