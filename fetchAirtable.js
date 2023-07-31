//Raw code, still has some issues here and there.
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

const matchingRecord = records.find(record => record.fields.phoneN === phoneN)

if (matchingRecord) {
  workflow.userData = matchingRecord.fields.userData
  workflow.name = matchingRecord.fields.name
  workflow.checkin = luxon.DateTime.fromISO(matchingRecord.fields.checkin)
  workflow.checkout = luxon.DateTime.fromISO(matchingRecord.fields.checkout)
  workflow.roomName = matchingRecord.fields.roomName
  workflow.createdTime = matchingRecord.fields.createdTime
}
