export function logarTempoDeExecucao() {
    return function (target, propertyKey, description) {
        const metodoOriginal = description.value;
        description.value = function (...args) {
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execucao: ${(t2 - t1) / 1000}`);
            retorno;
        };
        return description;
    };
}
