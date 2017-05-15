class NETWORKS {
    static LIVENET = 'livenet'
    static TESTNET = 'testnet'
}

class SCRIPT_TYPES {
    static P2SH = 'P2SH'
    static P2PKH = 'P2PKH'
}

class DERIVATION_STRATEGIES {
    static BIP44 = 'BIP44'
    static BIP45 = 'BIP45'
}

class PATHS {
    static REQUEST_KEY = "m/1'/0"
    static TXPROPOSAL_KEY = "m/1'/1"
    static REQUEST_KEY_AUTH = "m/2" // relative to BAS
}

const BIP45_SHARED_INDEX = 0x80000000 - 1



export { 
    NETWORKS, 
    SCRIPT_TYPES, 
    DERIVATION_STRATEGIES, 
    PATHS, 
    BIP45_SHARED_INDEX 
}



