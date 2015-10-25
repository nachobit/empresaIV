var assert = require("assert");
lib = require(__dirname+"/../models/docdbUtils.js");

    describe('Web', function(){
        it('Carga del fichero docdbUtils', function(){
            assert(lib, "Cargado");
        });
});

