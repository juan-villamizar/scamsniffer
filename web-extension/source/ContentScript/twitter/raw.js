function isActionOnCard(el) {
    const parentSelector = document;
    var p = el.parentNode;
    while (p !== parentSelector) {
        var o = p;
        if (o.getAttribute) {
            const testid = o.getAttribute('data-testid')
            if (testid === 'card.wrapper') {
                return o;
            }
        }
        p = o.parentNode;
    }
    return null;
}

function extractMeta(el) {
    const detailNode = el.querySelector('[data-testid="card.layoutLarge.detail"]');
    if (detailNode) {
        const childNodes = detailNode.childNodes;
        const domainEl = childNodes[0]
        const titleEl = childNodes[1]
        return {
            link: detailNode.parentNode.href,
            domain: domainEl && domainEl.innerText.trim(),
            title: titleEl && titleEl.innerText.trim(),
        }
    }

    const smallNode = el.querySelector('[data-testid="card.layoutSmall.detail"]');
    if (smallNode) {
        const childNodes = smallNode.childNodes;
        const domainEl = childNodes[0]
        const titleEl = childNodes[1]
        return {
            link: smallNode.parentNode.href,
            domain: domainEl && domainEl.innerText.trim(),
            title: titleEl && titleEl.innerText.trim(),
        }
    }
    return null;
}

    const isTwitter = window.location.host.includes('twitter.com');
    if (isTwitter) {
        document.addEventListener('click', (event) => {
            const isInCardEl = isActionOnCard(event.target);
            if (isInCardEl) {
                console.log('isInCardEl')
                const info = extractMeta(isInCardEl)
                if (info) {
                    console.log('clicked', info)
                }
            }
        })
    }