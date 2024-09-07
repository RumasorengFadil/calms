<?php

namespace App\Http\Requests\Bibliography;

use App\Http\Requests\Traits\BiblioRules;
use Illuminate\Foundation\Http\FormRequest;

class StoreBiblioRequest extends FormRequest
{
    use BiblioRules;
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return $this->biblioRules();
    }

    public function messages()
    {
        return $this->biblioMessages();
    }
}