function calc() {
    // trade calc 

    const dropdown = document.querySelector('.trade__dropdown'),
          dropdownItems = dropdown.querySelectorAll('.trade__dropdown-item'),
          inputHash = document.querySelector('.trade__hashrate'),
          calcButton = document.querySelector('.trade__calculate'),
          tradeETH = document.querySelector('.trade__ethTXT'),
          trade__USD = document.querySelector('.usd'),
          dropdownParent = document.querySelector('.trade__th'),
          hashrate = dropdownParent.querySelector('.trade__hr');


    let tradeOptions = {
        hashrate: 'TH/S',
        ratio: 0.2412,
        usdValue: 300,

        changeHashrate(hr) {
            if (hr == 'TH/s') {
                this.ratio = 0.2412;
            } else if (hr == 'MH/s') {
                this.ratio = 0.35; 
            } else if (hr == 'GH/s') {
                this.ratio = 0.4;
            } else if (hr == 'PH/s') {
                this.ratio = 0.5;
            } else if (hr == 'EH/s') {
                this.ratio = 0.6;
            } else if (hr == 'KH/s') {
                this.ratio = 0.2;
            }
        }
    }

    dropdown.addEventListener('click', (e) => {
        if (e.target.classList.contains('trade__dropdown-item')) {
            dropdownItems.forEach(item => {
                if (item == e.target) {
                    hashrate.textContent = `${item.textContent}`;
                    tradeOptions.changeHashrate(`${item.textContent}`);
                }
            });
        }
    });

    function updateRevenue() {
        if (inputHash.value != '') {
            tradeETH.textContent = `${(tradeOptions.ratio * inputHash.value).toFixed(2)} ETH`;
            trade__USD.textContent = `$${(tradeETH.textContent.replace(/ETH/i, '')  * tradeOptions.usdValue).toFixed()}`;
        } else {
            tradeETH.textContent = 'Enter data';
            trade__USD.textContent = '($0)';
        }
    }

    calcButton.addEventListener('click', () => {
        updateRevenue();
    });

    document.body.addEventListener('keydown', (e) => {
        if (e.code == 'Enter') {
            updateRevenue();
        }
    });
}

export default calc;