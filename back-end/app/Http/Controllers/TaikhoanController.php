<?php

namespace App\Http\Controllers;

use App\Models\Taikhoan;
use Illuminate\Http\Request;

class TaikhoanController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $taikhoan = Taikhoan::all();
        return response()->json($taikhoan);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required',
            'matkhau' => 'required',
            'makhachhang' => 'required',
        ]);

        if (Taikhoan::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Tai khoan da ton tai!',
            ], 200);
        } else {
            $taikhoan = Taikhoan::create($request->all());

            return response()->json([
                'message' => 'Tai khoan tao thanh cong',
                'Tai khoan' => $taikhoan
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Taikhoan  $taikhoan
     * @return \Illuminate\Http\Response
     */
    public function show(Taikhoan $taikhoan)
    {
        return response()->json($taikhoan);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Taikhoan  $taikhoan
     * @return \Illuminate\Http\Response
     */
    public function edit(Taikhoan $taikhoan)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Taikhoan  $taikhoan
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Taikhoan $taikhoan)
    {
        if (Taikhoan::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Tai khoan khong ton tai!',
            ], 200);
        } else {
            $taikhoan->update($request->all());
            return response()->json($taikhoan);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Taikhoan  $taikhoan
     * @return \Illuminate\Http\Response
     */
    public function destroy(Taikhoan $taikhoan)
    {
        if (!$taikhoan) {
            return response()->json([
                'Status' => true,
                'Message' => "Tai khoan khong ton tai!",
            ], 200);
        } else {
            $taikhoan->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa tai khoan thanh cong!",
            ], 200);
        }
    }
}
