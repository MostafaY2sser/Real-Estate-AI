<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    // جلب كل الرسائل (لـ Admin Dashboard)
    public function index() {
        return response()->json(Contact::all());
    }

    // استقبال رسالة من Landing Page
    public function store(Request $request) {
        $data = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'nullable|string',
            'message' => 'required|string',
        ]);

        $contact = Contact::create($data);
        return response()->json($contact);
    }

    // جلب رسالة واحدة (اختياري)
    public function show($id) {
        $contact = Contact::findOrFail($id);
        return response()->json($contact);
    }

    // تعديل رسالة (اختياري)
    public function update(Request $request, $id) {
        $contact = Contact::findOrFail($id);
        $contact->update($request->all());
        return response()->json($contact);
    }

    // حذف رسالة
    public function destroy($id) {
        $contact = Contact::findOrFail($id);
        $contact->delete();
        return response()->json(['message' => 'Contact deleted successfully']);
    }
}
