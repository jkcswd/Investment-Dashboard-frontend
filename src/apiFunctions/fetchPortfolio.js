const fetchPortfolio =  async (portfolioName) => {
  try{
    const response = await fetch(`/portfolio/${[portfolioName]}`)
    const data = await response.json()

    return data;
  }catch (err) {
    console.log(err.message)
  }
}

export default fetchPortfolio;