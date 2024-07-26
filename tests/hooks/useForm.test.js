import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../src/hooks/useForm";

describe("Pruebas en useForm", () => {
    const initialForm = {
        name: "Sergio",
        email: "salcrom@gmail.com",
    };

    test("debe de regresar los valores por defecto", () => {
        const { result } = renderHook(() => useForm(initialForm));
        // Hacer un console.log de result.current
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        });
    });

    test("debe de cambiar el nombre del formulario", () => {
        const newValue = "Juan";

        // montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange } = result.current;
        // onInputChange() // act, event,...
        act(() => {
            onInputChange({ target: { name: "name", value: newValue } });
        });

        // expect, result.current.name === Juan
        expect(result.current.name).toBe(newValue);
        expect(result.current.formState.name).toBe(newValue);
    });

    test("debe de realizar el reset del formulario", () => {
        const newValue = "Juan";

        // montar el hook
        const { result } = renderHook(() => useForm(initialForm));
        const { onInputChange, onResetForm } = result.current;
        // onInputChange() // act, event,...
        act(() => {
            onInputChange({ target: { name: "name", value: newValue } });
            onResetForm();
        });

        // expect, result.current.name === Juan
        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);
    });
});
