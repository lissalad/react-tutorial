// src/POPOSList.js
import { useState } from 'react'
import data from '../../sfpopos-data.js'
import POPOSSpace from '../Space/POPOSSpace';
import './POPOSList.css';

function POPOSList() {
  	const [ query, setQuery ] = useState('')
    const spaces = data
    .filter(obj => obj.title.toLowerCase().includes(query) || obj.address.toLowerCase().includes(query))
    .map(({ title, address, images, hours }, i) => {
    // const spaces = data.map(({ title, address, images, hours }, i) => {
    return (
      <div className="POPOSList">

      <POPOSSpace
        id={i}
        key={title}
        name={title}
        address={address}
        image={images[0]}
        hours={hours}
      />
      </div>
    )
  })
  return (
    <div className="POPOSList">
			<form>
				<input
					value={query}
					placeholder="search"
					onChange={(e) => setQuery(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{spaces}
    </div>
  )

  
}


export default POPOSList
