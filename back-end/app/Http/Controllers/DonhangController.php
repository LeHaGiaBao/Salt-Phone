<?php

namespace App\Http\Controllers;

use App\Models\Donhang;
use Illuminate\Http\Request;

class DonhangController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $donhang = Donhang::all();
        return response()->json($donhang);
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
            'tongsotien' => 'required',
            'diachigiaohang' => 'required',
            'makhachhang' => 'required',
        ]);

        if (Donhang::where($request->all())->count() > 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai da ton tai!',
            ], 200);
        } else {
            $donhang = Donhang::create($request->all());

            return response()->json([
                'message' => 'Dien thoai tao thanh cong',
                'Don hang' => $donhang
            ], 200);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Donhang  $donhang
     * @return \Illuminate\Http\Response
     */
    public function show(Donhang $donhang)
    {
        return response()->json($donhang);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Donhang  $donhang
     * @return \Illuminate\Http\Response
     */
    public function edit(Donhang $donhang)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Donhang  $donhang
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Donhang $donhang)
    {
        if (Donhang::where($request->all())->count() < 0) {
            return response()->json([
                'Status' => true,
                'Message' => 'Dien thoai khong ton tai!',
            ], 200);
        } else {
            $donhang->update($request->all());
            return response()->json($donhang);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Donhang  $donhang
     * @return \Illuminate\Http\Response
     */
    public function destroy(Donhang $donhang)
    {
        if (!$donhang) {
            return response()->json([
                'Status' => true,
                'Message' => 'Don hang khong ton tai',
            ], 200);
        } else {
            $donhang->delete();
            return response()->json([
                'Status' => true,
                'Message' => "Xoa don hang thanh cong!",
            ], 200);
        }
    }
}
