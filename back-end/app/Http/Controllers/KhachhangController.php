<?php

namespace App\Http\Controllers;

use App\Models\Khachhang;
use Illuminate\Http\Request;

class KhachhangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $khachhang = Khachhang::all();
        return response()->json($khachhang);
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
            'hovaten' => 'required',
            'email'  => 'required',
            'matkhau' => 'required',
            'sodienthoai'  => 'required',
            'gioitinh'  => 'required',
            'ngaysinh'  => 'required',
            'mataikhoan' => 'required',
        ]);

        if (Khachhang::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Khach hang da ton tai!',
            ], 200);
        } else {
            $khachhang = Khachhang::create($request->all());

            return response()->json([
                'message' => 'Khach hang tao thanh cong',
                'Khach hang' => $khachhang
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Khachhang  $khachhang
     * @return \Illuminate\Http\Response
     */
    public function show(Khachhang $khachhang)
    {
        return response()->json($khachhang);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Khachhang  $khachhang
     * @return \Illuminate\Http\Response
     */
    public function edit(Khachhang $khachhang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Khachhang  $khachhang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Khachhang $khachhang)
    {
        if (Khachhang::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Khach hang khong ton tai!',
            ], 200);
        } else {
            $khachhang->update($request->all());
            return response()->json($khachhang);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Khachhang  $khachhang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Khachhang $khachhang)
    {
        if (!$khachhang) {
            return response()->json([
                'Status' => true,
                'Message' => "Khach hang khong ton tai!",
            ], 200);
        } else {
            $khachhang->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa khach hang thanh cong!",
            ], 200);
        }
    }
}
