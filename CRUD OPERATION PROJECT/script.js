// --- VARIABLES & HELPER ---
let buildList = [];
let action = null; // 'delete' or 'edit'
let selectedId = null;

// Short Helper function to select elements (Less typing!)
const get = (id) => document.getElementById(id);

// 1. CREATE PART
function addPart() {
    let type = get('partType').value;
    let name = get('partName').value;
    let price = get('partPrice').value;

    if (name === "" || price === "") {
        openModal('error', null, "⚠️ Fields cannot be empty!");
        return;
    }

    buildList.push({
        id: Date.now(),
        type: type,
        name: name,
        price: parseFloat(price)
    });

    renderCards();
    get('partName').value = "";
    get('partPrice').value = "";
}

// 2. READ & RENDER CARDS (With 3D Effect)
function renderCards() {
    let grid = get('buildGrid');
    let total = 0;
    grid.innerHTML = "";

    buildList.forEach((part) => {
        total += part.price;
        
        // Note: onmousemove & onmouseleave added for 3D effect
        grid.innerHTML += `
            <div class="part-card" onmousemove="tilt(event, this)" onmouseleave="reset(this)">
                <div class="part-type">${part.type}</div>
                <div class="part-name">${part.name}</div>
                <div class="part-price">$${part.price.toFixed(2)}</div>
                <div class="card-actions">
                    <button class="action-btn btn-edit" onclick="openModal('edit', ${part.id})">EDIT</button>
                    <button class="action-btn btn-del" onclick="openModal('delete', ${part.id})">DELETE</button>
                </div>
            </div>
        `;
    });

    get('totalCost').innerText = total.toFixed(2);
}

// 3. MODAL LOGIC (Unified)
function openModal(mode, id = null, msg = "") {
    let modal = get('customModal');
    let inputDiv = get('modalInputContainer');
    let title = get('modalTitle');
    
    modal.style.display = 'flex';
    selectedId = id;
    action = mode;

    if (mode === 'delete') {
        title.innerText = "CONFIRM DELETION";
        get('modalMsg').innerText = "Delete this item permanently?";
        inputDiv.style.display = 'none';
    } 
    else if (mode === 'edit') {
        title.innerText = "UPDATE PRICE";
        get('modalMsg').innerText = "Enter new price below:";
        inputDiv.style.display = 'block';
        // Pre-fill current price
        let item = buildList.find(p => p.id === id);
        get('modalInput').value = item.price;
    } 
    else { // Error Mode
        title.innerText = "SYSTEM ERROR";
        get('modalMsg').innerText = msg;
        inputDiv.style.display = 'none';
    }
}

function closeModal() {
    get('customModal').style.display = 'none';
}

// 4. CONFIRM BUTTON ACTION
get('confirmBtn').addEventListener('click', () => {
    if (action === 'delete') {
        buildList = buildList.filter(p => p.id !== selectedId);
    } 
    else if (action === 'edit') {
        let newPrice = get('modalInput').value;
        if (newPrice) {
            let item = buildList.find(p => p.id === selectedId);
            item.price = parseFloat(newPrice);
        }
    }
    renderCards();
    closeModal();
});

// 5. 3D TILT EFFECT LOGIC
function tilt(e, card) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    card.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(1.05)`;
}

function reset(card) {
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale(1)`;
}