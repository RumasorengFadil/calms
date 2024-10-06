<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Loan extends Model
{
    use HasFactory;
    protected $primaryKey = 'loan_id';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'item_code',
        'member_id',
        'loan_date',
        'due_date',
        'renewed',
        'is_lent',
        'is_return',
        'return_date',
        'input_date',
        'last_update',
    ];

    public function history()
    {
        return $this->belongsTo(LoanHistory::class, 'loan_id');
    }
}