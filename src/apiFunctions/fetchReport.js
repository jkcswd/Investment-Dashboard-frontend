const fetchReport =  async () => {
  try{
    const response = await fetch(`/daily-report`)
    const data = await response.json()

    return data;
  }catch (err) {
    console.log(err.message)
  }
}

export default fetchReport;