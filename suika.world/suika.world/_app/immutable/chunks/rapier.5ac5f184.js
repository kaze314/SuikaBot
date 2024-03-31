let Tt,
  re,
  ie,
  Pt,
  ae,
  oe,
  xt,
  ne,
  lt,
  Mt,
  M,
  se,
  ct,
  kt,
  le,
  ce,
  Ne,
  et,
  de,
  _e,
  Ft,
  Dt,
  X,
  we,
  he,
  pe,
  dt,
  D,
  ue,
  Y,
  be,
  Q,
  me,
  ye,
  fe,
  _t,
  wt,
  Ht,
  ge,
  Se,
  ve,
  Re,
  Je,
  ht,
  Bt,
  pt,
  Ce,
  Ae,
  zt,
  J,
  je,
  H,
  C,
  ut,
  Lt,
  Gt,
  Nt,
  Jt,
  k,
  bt,
  rt,
  it,
  R,
  Ie,
  Ee,
  Te,
  qt,
  Wt,
  Ot,
  Vt,
  Pe,
  d,
  Ut,
  gr,
  qe,
  Rd = (async () => {
    (function () {
      try {
        var e =
            typeof window < "u"
              ? window
              : typeof global < "u"
              ? global
              : typeof self < "u"
              ? self
              : {},
          t = new Error().stack;
        t &&
          ((e._sentryDebugIds = e._sentryDebugIds || {}),
          (e._sentryDebugIds[t] = "f1431c28-9128-4f8a-8955-775011c58c27"),
          (e._sentryDebugIdIdentifier =
            "sentry-dbid-f1431c28-9128-4f8a-8955-775011c58c27"));
      } catch {}
    })();
    const Sr = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            get RawBroadPhase() {
              return W;
            },
            get RawCCDSolver() {
              return Z;
            },
            get RawCharacterCollision() {
              return at;
            },
            get RawColliderSet() {
              return E;
            },
            get RawContactForceEvent() {
              return Yt;
            },
            get RawContactManifold() {
              return Qt;
            },
            get RawContactPair() {
              return $t;
            },
            get RawDebugRenderPipeline() {
              return ft;
            },
            get RawDeserializedWorld() {
              return Zt;
            },
            get RawEventQueue() {
              return ot;
            },
            get RawFeatureType() {
              return md;
            },
            get RawGenericJoint() {
              return z;
            },
            get RawImpulseJointSet() {
              return L;
            },
            get RawIntegrationParameters() {
              return O;
            },
            get RawIslandManager() {
              return G;
            },
            get RawJointAxis() {
              return yt;
            },
            get RawJointType() {
              return pd;
            },
            get RawKinematicCharacterController() {
              return gt;
            },
            get RawMotorModel() {
              return ud;
            },
            get RawMultibodyJointSet() {
              return N;
            },
            get RawNarrowPhase() {
              return q;
            },
            get RawPhysicsPipeline() {
              return St;
            },
            get RawPointColliderProjection() {
              return vt;
            },
            get RawPointProjection() {
              return Rt;
            },
            get RawQueryPipeline() {
              return nt;
            },
            get RawRayColliderIntersection() {
              return Ct;
            },
            get RawRayColliderToi() {
              return te;
            },
            get RawRayIntersection() {
              return At;
            },
            get RawRigidBodySet() {
              return P;
            },
            get RawRigidBodyType() {
              return bd;
            },
            get RawRotation() {
              return g;
            },
            get RawSerializationPipeline() {
              return jt;
            },
            get RawShape() {
              return f;
            },
            get RawShapeColliderTOI() {
              return It;
            },
            get RawShapeContact() {
              return st;
            },
            get RawShapeTOI() {
              return Et;
            },
            get RawShapeType() {
              return yd;
            },
            get RawVector() {
              return w;
            },
            get __wbg_bind_10dfe70e95d2a480() {
              return sr;
            },
            get __wbg_buffer_3f3d764d4747d564() {
              return lr;
            },
            get __wbg_call_168da88779e35f61() {
              return ar;
            },
            get __wbg_call_3999bee59e9f7719() {
              return or;
            },
            get __wbg_call_e1f72c051cdab859() {
              return nr;
            },
            get __wbg_length_9a2deed95d22668d() {
              return ur;
            },
            get __wbg_length_9e1ae1900cb0fbd5() {
              return wr;
            },
            get __wbg_new_8c3f0052272a457a() {
              return dr;
            },
            get __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4() {
              return hr;
            },
            get __wbg_newwithbyteoffsetandlength_d9aa266703cb98be() {
              return cr;
            },
            get __wbg_newwithlength_a7168e4a1e8f5e12() {
              return br;
            },
            get __wbg_rawcontactforceevent_new() {
              return ir;
            },
            get __wbg_rawraycolliderintersection_new() {
              return rr;
            },
            get __wbg_set_0e0314cf6675c1b9() {
              return pr;
            },
            get __wbg_set_83db9690f9353e79() {
              return _r;
            },
            get __wbindgen_boolean_get() {
              return tr;
            },
            get __wbindgen_is_function() {
              return er;
            },
            get __wbindgen_memory() {
              return yr;
            },
            get __wbindgen_number_get() {
              return Ze;
            },
            get __wbindgen_number_new() {
              return $e;
            },
            get __wbindgen_object_drop_ref() {
              return Qe;
            },
            get __wbindgen_throw() {
              return mr;
            },
            get version() {
              return Ue;
            },
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      vr =
        "" +
        new URL("../assets/rapier_wasm2d_bg.b5dc53dc.wasm", import.meta.url)
          .href,
      Rr = async (e = {}, t) => {
        let r;
        if (t.startsWith("data:")) {
          const a = t.replace(/^data:.*?base64,/, "");
          let n;
          if (typeof Buffer == "function" && typeof Buffer.from == "function")
            n = Buffer.from(a, "base64");
          else if (typeof atob == "function") {
            const s = atob(a);
            n = new Uint8Array(s.length);
            for (let c = 0; c < s.length; c++) n[c] = s.charCodeAt(c);
          } else throw new Error("Cannot decode base64-encoded data URL");
          r = await WebAssembly.instantiate(n, e);
        } else {
          const a = await fetch(t),
            n = a.headers.get("Content-Type") || "";
          if (
            "instantiateStreaming" in WebAssembly &&
            n.startsWith("application/wasm")
          )
            r = await WebAssembly.instantiateStreaming(a, e);
          else {
            const s = await a.arrayBuffer();
            r = await WebAssembly.instantiate(s, e);
          }
        }
        return r.instance.exports;
      };
    URL = globalThis.URL;
    const o = await Rr(
        {
          "./rapier_wasm2d_bg.js": {
            __wbindgen_object_drop_ref: Qe,
            __wbindgen_number_new: $e,
            __wbindgen_number_get: Ze,
            __wbindgen_boolean_get: tr,
            __wbindgen_is_function: er,
            __wbg_rawraycolliderintersection_new: rr,
            __wbg_rawcontactforceevent_new: ir,
            __wbg_call_168da88779e35f61: ar,
            __wbg_call_3999bee59e9f7719: or,
            __wbg_call_e1f72c051cdab859: nr,
            __wbg_bind_10dfe70e95d2a480: sr,
            __wbg_buffer_3f3d764d4747d564: lr,
            __wbg_newwithbyteoffsetandlength_d9aa266703cb98be: cr,
            __wbg_new_8c3f0052272a457a: dr,
            __wbg_set_83db9690f9353e79: _r,
            __wbg_length_9e1ae1900cb0fbd5: wr,
            __wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4: hr,
            __wbg_set_0e0314cf6675c1b9: pr,
            __wbg_length_9a2deed95d22668d: ur,
            __wbg_newwithlength_a7168e4a1e8f5e12: br,
            __wbindgen_throw: mr,
            __wbindgen_memory: yr,
          },
        },
        vr
      ),
      Cr = o.memory,
      Ar = o.version,
      jr = o.__wbg_rawkinematiccharactercontroller_free,
      Ir = o.rawkinematiccharactercontroller_new,
      Er = o.rawkinematiccharactercontroller_up,
      Tr = o.rawkinematiccharactercontroller_setUp,
      Pr = o.rawkinematiccharactercontroller_offset,
      xr = o.rawkinematiccharactercontroller_setOffset,
      Mr = o.rawkinematiccharactercontroller_slideEnabled,
      kr = o.rawkinematiccharactercontroller_setSlideEnabled,
      Fr = o.rawkinematiccharactercontroller_autostepMaxHeight,
      Dr = o.rawkinematiccharactercontroller_autostepMinWidth,
      Hr = o.rawkinematiccharactercontroller_autostepIncludesDynamicBodies,
      Br = o.rawkinematiccharactercontroller_autostepEnabled,
      zr = o.rawkinematiccharactercontroller_enableAutostep,
      Lr = o.rawkinematiccharactercontroller_disableAutostep,
      Gr = o.rawkinematiccharactercontroller_minSlopeSlideAngle,
      Nr = o.rawkinematiccharactercontroller_setMinSlopeSlideAngle,
      Jr = o.rawkinematiccharactercontroller_snapToGroundDistance,
      qr = o.rawkinematiccharactercontroller_enableSnapToGround,
      Wr = o.rawkinematiccharactercontroller_disableSnapToGround,
      Or = o.rawkinematiccharactercontroller_snapToGroundEnabled,
      Vr = o.rawkinematiccharactercontroller_computeColliderMovement,
      Ur = o.rawkinematiccharactercontroller_computedMovement,
      Kr = o.rawkinematiccharactercontroller_computedGrounded,
      Xr = o.rawkinematiccharactercontroller_numComputedCollisions,
      Yr = o.rawkinematiccharactercontroller_computedCollision,
      Qr = o.__wbg_rawcharactercollision_free,
      $r = o.rawcharactercollision_new,
      Zr = o.rawcharactercollision_handle,
      ti = o.rawcharactercollision_translationApplied,
      ei = o.rawcharactercollision_translationRemaining,
      ri = o.rawcharactercollision_toi,
      ii = o.rawcharactercollision_worldWitness1,
      ai = o.rawcharactercollision_worldWitness2,
      oi = o.rawcharactercollision_worldNormal1,
      ni = o.rawcharactercollision_worldNormal2,
      si = o.__wbg_rawccdsolver_free,
      li = o.rawccdsolver_new,
      ci = o.rawimpulsejointset_jointType,
      di = o.rawimpulsejointset_jointBodyHandle1,
      _i = o.rawimpulsejointset_jointBodyHandle2,
      wi = o.rawimpulsejointset_jointFrameX1,
      hi = o.rawimpulsejointset_jointFrameX2,
      pi = o.rawimpulsejointset_jointAnchor1,
      ui = o.rawimpulsejointset_jointAnchor2,
      bi = o.rawimpulsejointset_jointSetAnchor1,
      mi = o.rawimpulsejointset_jointSetAnchor2,
      yi = o.rawimpulsejointset_jointContactsEnabled,
      fi = o.rawimpulsejointset_jointSetContactsEnabled,
      gi = o.rawimpulsejointset_jointLimitsEnabled,
      Si = o.rawimpulsejointset_jointLimitsMin,
      vi = o.rawimpulsejointset_jointLimitsMax,
      Ri = o.rawimpulsejointset_jointSetLimits,
      Ci = o.rawimpulsejointset_jointConfigureMotorModel,
      Ai = o.rawimpulsejointset_jointConfigureMotorVelocity,
      ji = o.rawimpulsejointset_jointConfigureMotorPosition,
      Ii = o.rawimpulsejointset_jointConfigureMotor,
      Ei = o.__wbg_rawimpulsejointset_free,
      Ti = o.rawimpulsejointset_new,
      Pi = o.rawimpulsejointset_createJoint,
      xi = o.rawimpulsejointset_remove,
      Mi = o.rawimpulsejointset_len,
      ki = o.rawimpulsejointset_contains,
      Fi = o.rawimpulsejointset_forEachJointHandle,
      Di = o.rawimpulsejointset_forEachJointAttachedToRigidBody,
      Hi = o.__wbg_rawintegrationparameters_free,
      Bi = o.rawintegrationparameters_new,
      zi = o.rawintegrationparameters_dt,
      Li = o.rawintegrationparameters_erp,
      Gi = o.rawintegrationparameters_allowedLinearError,
      Ni = o.rawintegrationparameters_maxVelocityIterations,
      Ji = o.rawintegrationparameters_maxVelocityFrictionIterations,
      qi = o.rawintegrationparameters_maxStabilizationIterations,
      Wi = o.rawintegrationparameters_minIslandSize,
      Oi = o.rawintegrationparameters_maxCcdSubsteps,
      Vi = o.rawintegrationparameters_set_dt,
      Ui = o.rawintegrationparameters_set_erp,
      Ki = o.rawintegrationparameters_set_allowedLinearError,
      Xi = o.rawintegrationparameters_set_predictionDistance,
      Yi = o.rawintegrationparameters_set_maxVelocityIterations,
      Qi = o.rawintegrationparameters_set_maxVelocityFrictionIterations,
      $i = o.rawintegrationparameters_set_maxStabilizationIterations,
      Zi = o.rawintegrationparameters_set_minIslandSize,
      ta = o.rawintegrationparameters_set_maxCcdSubsteps,
      ea = o.__wbg_rawislandmanager_free,
      ra = o.rawislandmanager_new,
      ia = o.rawislandmanager_forEachActiveRigidBodyHandle,
      aa = o.__wbg_rawgenericjoint_free,
      oa = o.rawgenericjoint_prismatic,
      na = o.rawgenericjoint_fixed,
      sa = o.rawgenericjoint_revolute,
      la = o.rawmultibodyjointset_jointType,
      ca = o.rawmultibodyjointset_jointFrameX1,
      da = o.rawmultibodyjointset_jointFrameX2,
      _a = o.rawmultibodyjointset_jointAnchor1,
      wa = o.rawmultibodyjointset_jointAnchor2,
      ha = o.rawmultibodyjointset_jointContactsEnabled,
      pa = o.rawmultibodyjointset_jointSetContactsEnabled,
      ua = o.rawmultibodyjointset_jointLimitsEnabled,
      ba = o.rawmultibodyjointset_jointLimitsMin,
      ma = o.rawmultibodyjointset_jointLimitsMax,
      ya = o.__wbg_rawmultibodyjointset_free,
      fa = o.rawmultibodyjointset_new,
      ga = o.rawmultibodyjointset_createJoint,
      Sa = o.rawmultibodyjointset_remove,
      va = o.rawmultibodyjointset_contains,
      Ra = o.rawmultibodyjointset_forEachJointHandle,
      Ca = o.rawmultibodyjointset_forEachJointAttachedToRigidBody,
      Aa = o.rawrigidbodyset_rbTranslation,
      ja = o.rawrigidbodyset_rbRotation,
      Ia = o.rawrigidbodyset_rbSleep,
      Ea = o.rawrigidbodyset_rbIsSleeping,
      Ta = o.rawrigidbodyset_rbIsMoving,
      Pa = o.rawrigidbodyset_rbNextTranslation,
      xa = o.rawrigidbodyset_rbNextRotation,
      Ma = o.rawrigidbodyset_rbSetTranslation,
      ka = o.rawrigidbodyset_rbSetRotation,
      Fa = o.rawrigidbodyset_rbSetLinvel,
      Da = o.rawrigidbodyset_rbSetAngvel,
      Ha = o.rawrigidbodyset_rbSetNextKinematicTranslation,
      Ba = o.rawrigidbodyset_rbSetNextKinematicRotation,
      za = o.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders,
      La = o.rawrigidbodyset_rbSetAdditionalMass,
      Ga = o.rawrigidbodyset_rbSetAdditionalMassProperties,
      Na = o.rawrigidbodyset_rbLinvel,
      Ja = o.rawrigidbodyset_rbAngvel,
      qa = o.rawrigidbodyset_rbLockTranslations,
      Wa = o.rawrigidbodyset_rbSetEnabledTranslations,
      Oa = o.rawrigidbodyset_rbLockRotations,
      Va = o.rawrigidbodyset_rbDominanceGroup,
      Ua = o.rawrigidbodyset_rbSetDominanceGroup,
      Ka = o.rawrigidbodyset_rbEnableCcd,
      Xa = o.rawrigidbodyset_rbMass,
      Ya = o.rawrigidbodyset_rbInvMass,
      Qa = o.rawrigidbodyset_rbEffectiveInvMass,
      $a = o.rawrigidbodyset_rbLocalCom,
      Za = o.rawrigidbodyset_rbWorldCom,
      to = o.rawrigidbodyset_rbInvPrincipalInertiaSqrt,
      eo = o.rawrigidbodyset_rbPrincipalInertia,
      ro = o.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt,
      io = o.rawrigidbodyset_rbEffectiveAngularInertia,
      ao = o.rawrigidbodyset_rbWakeUp,
      oo = o.rawrigidbodyset_rbIsCcdEnabled,
      no = o.rawrigidbodyset_rbNumColliders,
      so = o.rawrigidbodyset_rbCollider,
      lo = o.rawrigidbodyset_rbBodyType,
      co = o.rawrigidbodyset_rbSetBodyType,
      _o = o.rawrigidbodyset_rbIsFixed,
      wo = o.rawrigidbodyset_rbIsKinematic,
      ho = o.rawrigidbodyset_rbIsDynamic,
      po = o.rawrigidbodyset_rbLinearDamping,
      uo = o.rawrigidbodyset_rbAngularDamping,
      bo = o.rawrigidbodyset_rbSetLinearDamping,
      mo = o.rawrigidbodyset_rbSetAngularDamping,
      yo = o.rawrigidbodyset_rbSetEnabled,
      fo = o.rawrigidbodyset_rbIsEnabled,
      go = o.rawrigidbodyset_rbGravityScale,
      So = o.rawrigidbodyset_rbSetGravityScale,
      vo = o.rawrigidbodyset_rbResetForces,
      Ro = o.rawrigidbodyset_rbResetTorques,
      Co = o.rawrigidbodyset_rbAddForce,
      Ao = o.rawrigidbodyset_rbApplyImpulse,
      jo = o.rawrigidbodyset_rbAddTorque,
      Io = o.rawrigidbodyset_rbApplyTorqueImpulse,
      Eo = o.rawrigidbodyset_rbAddForceAtPoint,
      To = o.rawrigidbodyset_rbApplyImpulseAtPoint,
      Po = o.rawrigidbodyset_rbUserData,
      xo = o.rawrigidbodyset_rbSetUserData,
      Mo = o.__wbg_rawrigidbodyset_free,
      ko = o.rawrigidbodyset_new,
      Fo = o.rawrigidbodyset_createRigidBody,
      Do = o.rawrigidbodyset_remove,
      Ho = o.rawrigidbodyset_len,
      Bo = o.rawrigidbodyset_contains,
      zo = o.rawrigidbodyset_forEachRigidBodyHandle,
      Lo = o.rawrigidbodyset_propagateModifiedBodyPositionsToColliders,
      Go = o.__wbg_rawbroadphase_free,
      No = o.rawbroadphase_new,
      Jo = o.rawcolliderset_coTranslation,
      qo = o.rawcolliderset_coRotation,
      Wo = o.rawcolliderset_coSetTranslation,
      Oo = o.rawcolliderset_coSetTranslationWrtParent,
      Vo = o.rawcolliderset_coSetRotation,
      Uo = o.rawcolliderset_coSetRotationWrtParent,
      Ko = o.rawcolliderset_coIsSensor,
      Xo = o.rawcolliderset_coShapeType,
      Yo = o.rawcolliderset_coHalfspaceNormal,
      Qo = o.rawcolliderset_coHalfExtents,
      $o = o.rawcolliderset_coSetHalfExtents,
      Zo = o.rawcolliderset_coRadius,
      tn = o.rawcolliderset_coSetRadius,
      en = o.rawcolliderset_coHalfHeight,
      rn = o.rawcolliderset_coSetHalfHeight,
      an = o.rawcolliderset_coRoundRadius,
      on = o.rawcolliderset_coSetRoundRadius,
      nn = o.rawcolliderset_coVertices,
      sn = o.rawcolliderset_coIndices,
      ln = o.rawcolliderset_coHeightfieldHeights,
      cn = o.rawcolliderset_coHeightfieldScale,
      dn = o.rawcolliderset_coParent,
      _n = o.rawcolliderset_coSetEnabled,
      wn = o.rawcolliderset_coIsEnabled,
      hn = o.rawcolliderset_coFriction,
      pn = o.rawcolliderset_coRestitution,
      un = o.rawcolliderset_coDensity,
      bn = o.rawcolliderset_coMass,
      mn = o.rawcolliderset_coVolume,
      yn = o.rawcolliderset_coCollisionGroups,
      fn = o.rawcolliderset_coSolverGroups,
      gn = o.rawcolliderset_coActiveHooks,
      Sn = o.rawcolliderset_coActiveCollisionTypes,
      vn = o.rawcolliderset_coActiveEvents,
      Rn = o.rawcolliderset_coContactForceEventThreshold,
      Cn = o.rawcolliderset_coContainsPoint,
      An = o.rawcolliderset_coCastShape,
      jn = o.rawcolliderset_coCastCollider,
      In = o.rawcolliderset_coIntersectsShape,
      En = o.rawcolliderset_coContactShape,
      Tn = o.rawcolliderset_coContactCollider,
      Pn = o.rawcolliderset_coProjectPoint,
      xn = o.rawcolliderset_coIntersectsRay,
      Mn = o.rawcolliderset_coCastRay,
      kn = o.rawcolliderset_coCastRayAndGetNormal,
      Fn = o.rawcolliderset_coSetSensor,
      Dn = o.rawcolliderset_coSetRestitution,
      Hn = o.rawcolliderset_coSetFriction,
      Bn = o.rawcolliderset_coFrictionCombineRule,
      zn = o.rawcolliderset_coSetFrictionCombineRule,
      Ln = o.rawcolliderset_coRestitutionCombineRule,
      Gn = o.rawcolliderset_coSetRestitutionCombineRule,
      Nn = o.rawcolliderset_coSetCollisionGroups,
      Jn = o.rawcolliderset_coSetSolverGroups,
      qn = o.rawcolliderset_coSetActiveHooks,
      Wn = o.rawcolliderset_coSetActiveEvents,
      On = o.rawcolliderset_coSetActiveCollisionTypes,
      Vn = o.rawcolliderset_coSetShape,
      Un = o.rawcolliderset_coSetContactForceEventThreshold,
      Kn = o.rawcolliderset_coSetDensity,
      Xn = o.rawcolliderset_coSetMass,
      Yn = o.rawcolliderset_coSetMassProperties,
      Qn = o.__wbg_rawcolliderset_free,
      $n = o.rawcolliderset_new,
      Zn = o.rawcolliderset_len,
      ts = o.rawcolliderset_contains,
      es = o.rawcolliderset_createCollider,
      rs = o.rawcolliderset_remove,
      is = o.rawcolliderset_forEachColliderHandle,
      as = o.__wbg_rawshapecontact_free,
      os = o.__wbg_rawnarrowphase_free,
      ns = o.rawnarrowphase_new,
      ss = o.rawnarrowphase_contacts_with,
      ls = o.rawnarrowphase_contact_pair,
      cs = o.rawnarrowphase_intersections_with,
      ds = o.rawnarrowphase_intersection_pair,
      _s = o.__wbg_rawcontactmanifold_free,
      ws = o.rawcontactpair_collider1,
      hs = o.rawcontactpair_collider2,
      ps = o.rawcontactpair_numContactManifolds,
      us = o.rawcontactpair_contactManifold,
      bs = o.rawcontactmanifold_normal,
      ms = o.rawcontactmanifold_local_n1,
      ys = o.rawcontactmanifold_local_n2,
      fs = o.rawcontactmanifold_subshape1,
      gs = o.rawcontactmanifold_subshape2,
      Ss = o.rawcontactmanifold_num_contacts,
      vs = o.rawcontactmanifold_contact_local_p1,
      Rs = o.rawcontactmanifold_contact_local_p2,
      Cs = o.rawcontactmanifold_contact_dist,
      As = o.rawcontactmanifold_contact_fid1,
      js = o.rawcontactmanifold_contact_fid2,
      Is = o.rawcontactmanifold_contact_impulse,
      Es = o.rawcontactmanifold_contact_tangent_impulse,
      Ts = o.rawcontactmanifold_num_solver_contacts,
      Ps = o.rawcontactmanifold_solver_contact_point,
      xs = o.rawcontactmanifold_solver_contact_dist,
      Ms = o.rawcontactmanifold_solver_contact_friction,
      ks = o.rawcontactmanifold_solver_contact_restitution,
      Fs = o.rawcontactmanifold_solver_contact_tangent_velocity,
      Ds = o.__wbg_rawpointprojection_free,
      Hs = o.rawpointprojection_isInside,
      Bs = o.__wbg_rawpointcolliderprojection_free,
      zs = o.rawpointcolliderprojection_isInside,
      Ls = o.rawpointcolliderprojection_featureType,
      Gs = o.rawpointcolliderprojection_featureId,
      Ns = o.__wbg_rawrayintersection_free,
      Js = o.rawrayintersection_toi,
      qs = o.rawraycolliderintersection_normal,
      Ws = o.rawraycolliderintersection_featureType,
      Os = o.rawraycolliderintersection_featureId,
      Vs = o.__wbg_rawshape_free,
      Us = o.rawshape_cuboid,
      Ks = o.rawshape_roundCuboid,
      Xs = o.rawshape_ball,
      Ys = o.rawshape_halfspace,
      Qs = o.rawshape_capsule,
      $s = o.rawshape_polyline,
      Zs = o.rawshape_trimesh,
      tl = o.rawshape_heightfield,
      el = o.rawshape_segment,
      rl = o.rawshape_triangle,
      il = o.rawshape_roundTriangle,
      al = o.rawshape_convexHull,
      ol = o.rawshape_roundConvexHull,
      nl = o.rawshape_convexPolyline,
      sl = o.rawshape_roundConvexPolyline,
      ll = o.rawshape_castShape,
      cl = o.rawshape_intersectsShape,
      dl = o.rawshape_contactShape,
      _l = o.rawshape_containsPoint,
      wl = o.rawshape_projectPoint,
      hl = o.rawshape_intersectsRay,
      pl = o.rawshape_castRay,
      ul = o.rawshape_castRayAndGetNormal,
      bl = o.__wbg_rawshapecollidertoi_free,
      ml = o.rawshapecollidertoi_toi,
      yl = o.__wbg_rawrotation_free,
      fl = o.rawrotation_identity,
      gl = o.rawrotation_fromAngle,
      Sl = o.rawrotation_im,
      vl = o.rawrotation_angle,
      Rl = o.rawvector_zero,
      Cl = o.rawvector_new,
      Al = o.rawvector_set_y,
      jl = o.rawvector_xy,
      Il = o.rawvector_yx,
      El = o.__wbg_rawdebugrenderpipeline_free,
      Tl = o.rawdebugrenderpipeline_new,
      Pl = o.rawdebugrenderpipeline_vertices,
      xl = o.rawdebugrenderpipeline_colors,
      Ml = o.rawdebugrenderpipeline_render,
      kl = o.__wbg_raweventqueue_free,
      Fl = o.__wbg_rawcontactforceevent_free,
      Dl = o.rawcontactforceevent_collider1,
      Hl = o.rawcontactforceevent_collider2,
      Bl = o.rawcontactforceevent_total_force,
      zl = o.rawcontactforceevent_total_force_magnitude,
      Ll = o.rawcontactforceevent_max_force_magnitude,
      Gl = o.raweventqueue_new,
      Nl = o.raweventqueue_drainCollisionEvents,
      Jl = o.raweventqueue_drainContactForceEvents,
      ql = o.raweventqueue_clear,
      Wl = o.__wbg_rawphysicspipeline_free,
      Ol = o.rawphysicspipeline_new,
      Vl = o.rawphysicspipeline_step,
      Ul = o.rawphysicspipeline_stepWithEvents,
      Kl = o.__wbg_rawquerypipeline_free,
      Xl = o.rawquerypipeline_new,
      Yl = o.rawquerypipeline_update,
      Ql = o.rawquerypipeline_castRay,
      $l = o.rawquerypipeline_castRayAndGetNormal,
      Zl = o.rawquerypipeline_intersectionsWithRay,
      tc = o.rawquerypipeline_intersectionWithShape,
      ec = o.rawquerypipeline_projectPoint,
      rc = o.rawquerypipeline_projectPointAndGetFeature,
      ic = o.rawquerypipeline_intersectionsWithPoint,
      ac = o.rawquerypipeline_castShape,
      oc = o.rawquerypipeline_intersectionsWithShape,
      nc = o.rawquerypipeline_collidersWithAabbIntersectingAabb,
      sc = o.__wbg_rawdeserializedworld_free,
      lc = o.rawdeserializedworld_takeGravity,
      cc = o.rawdeserializedworld_takeIntegrationParameters,
      dc = o.rawdeserializedworld_takeIslandManager,
      _c = o.rawdeserializedworld_takeBroadPhase,
      wc = o.rawdeserializedworld_takeNarrowPhase,
      hc = o.rawdeserializedworld_takeBodies,
      pc = o.rawdeserializedworld_takeColliders,
      uc = o.rawdeserializedworld_takeImpulseJoints,
      bc = o.rawdeserializedworld_takeMultibodyJoints,
      mc = o.rawserializationpipeline_serializeAll,
      yc = o.rawserializationpipeline_deserializeAll,
      fc = o.__wbg_rawcontactpair_free,
      gc = o.__wbg_rawraycolliderintersection_free,
      Sc = o.__wbg_rawraycollidertoi_free,
      vc = o.__wbg_rawvector_free,
      Rc = o.__wbg_rawshapetoi_free,
      Cc = o.rawkinematiccharactercontroller_setMaxSlopeClimbAngle,
      Ac = o.rawvector_set_x,
      jc = o.rawcolliderset_isHandleValid,
      Ic = o.rawrayintersection_featureType,
      Ec = o.rawrayintersection_featureId,
      Tc = o.rawshapecontact_point1,
      Pc = o.rawshapecontact_normal2,
      xc = o.rawpointprojection_point,
      Mc = o.rawshapecontact_normal1,
      kc = o.rawrayintersection_normal,
      Fc = o.rawshapecontact_point2,
      Dc = o.rawshapetoi_witness1,
      Hc = o.rawshapetoi_witness2,
      Bc = o.rawshapetoi_normal1,
      zc = o.rawshapetoi_normal2,
      Lc = o.rawshapecollidertoi_witness1,
      Gc = o.rawshapecollidertoi_witness2,
      Nc = o.rawshapecollidertoi_normal1,
      Jc = o.rawshapecollidertoi_normal2,
      qc = o.rawpointcolliderprojection_point,
      Wc = o.rawcontactforceevent_max_force_direction,
      Oc = o.rawserializationpipeline_new,
      Vc = o.rawkinematiccharactercontroller_maxSlopeClimbAngle,
      Uc = o.rawshapecontact_distance,
      Kc = o.rawraycolliderintersection_toi,
      Xc = o.rawraycollidertoi_toi,
      Yc = o.rawshapetoi_toi,
      Qc = o.rawrotation_re,
      $c = o.rawvector_x,
      Zc = o.rawvector_y,
      td = o.rawintegrationparameters_predictionDistance,
      ed = o.rawraycolliderintersection_colliderHandle,
      rd = o.rawraycollidertoi_colliderHandle,
      id = o.rawshapecollidertoi_colliderHandle,
      ad = o.rawpointcolliderprojection_colliderHandle,
      od = o.__wbg_rawserializationpipeline_free,
      nd = o.__wbindgen_add_to_stack_pointer,
      sd = o.__wbindgen_free,
      ld = o.__wbindgen_malloc,
      cd = o.__wbindgen_exn_store,
      We = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            __wbg_rawbroadphase_free: Go,
            __wbg_rawccdsolver_free: si,
            __wbg_rawcharactercollision_free: Qr,
            __wbg_rawcolliderset_free: Qn,
            __wbg_rawcontactforceevent_free: Fl,
            __wbg_rawcontactmanifold_free: _s,
            __wbg_rawcontactpair_free: fc,
            __wbg_rawdebugrenderpipeline_free: El,
            __wbg_rawdeserializedworld_free: sc,
            __wbg_raweventqueue_free: kl,
            __wbg_rawgenericjoint_free: aa,
            __wbg_rawimpulsejointset_free: Ei,
            __wbg_rawintegrationparameters_free: Hi,
            __wbg_rawislandmanager_free: ea,
            __wbg_rawkinematiccharactercontroller_free: jr,
            __wbg_rawmultibodyjointset_free: ya,
            __wbg_rawnarrowphase_free: os,
            __wbg_rawphysicspipeline_free: Wl,
            __wbg_rawpointcolliderprojection_free: Bs,
            __wbg_rawpointprojection_free: Ds,
            __wbg_rawquerypipeline_free: Kl,
            __wbg_rawraycolliderintersection_free: gc,
            __wbg_rawraycollidertoi_free: Sc,
            __wbg_rawrayintersection_free: Ns,
            __wbg_rawrigidbodyset_free: Mo,
            __wbg_rawrotation_free: yl,
            __wbg_rawserializationpipeline_free: od,
            __wbg_rawshape_free: Vs,
            __wbg_rawshapecollidertoi_free: bl,
            __wbg_rawshapecontact_free: as,
            __wbg_rawshapetoi_free: Rc,
            __wbg_rawvector_free: vc,
            __wbindgen_add_to_stack_pointer: nd,
            __wbindgen_exn_store: cd,
            __wbindgen_free: sd,
            __wbindgen_malloc: ld,
            memory: Cr,
            rawbroadphase_new: No,
            rawccdsolver_new: li,
            rawcharactercollision_handle: Zr,
            rawcharactercollision_new: $r,
            rawcharactercollision_toi: ri,
            rawcharactercollision_translationApplied: ti,
            rawcharactercollision_translationRemaining: ei,
            rawcharactercollision_worldNormal1: oi,
            rawcharactercollision_worldNormal2: ni,
            rawcharactercollision_worldWitness1: ii,
            rawcharactercollision_worldWitness2: ai,
            rawcolliderset_coActiveCollisionTypes: Sn,
            rawcolliderset_coActiveEvents: vn,
            rawcolliderset_coActiveHooks: gn,
            rawcolliderset_coCastCollider: jn,
            rawcolliderset_coCastRay: Mn,
            rawcolliderset_coCastRayAndGetNormal: kn,
            rawcolliderset_coCastShape: An,
            rawcolliderset_coCollisionGroups: yn,
            rawcolliderset_coContactCollider: Tn,
            rawcolliderset_coContactForceEventThreshold: Rn,
            rawcolliderset_coContactShape: En,
            rawcolliderset_coContainsPoint: Cn,
            rawcolliderset_coDensity: un,
            rawcolliderset_coFriction: hn,
            rawcolliderset_coFrictionCombineRule: Bn,
            rawcolliderset_coHalfExtents: Qo,
            rawcolliderset_coHalfHeight: en,
            rawcolliderset_coHalfspaceNormal: Yo,
            rawcolliderset_coHeightfieldHeights: ln,
            rawcolliderset_coHeightfieldScale: cn,
            rawcolliderset_coIndices: sn,
            rawcolliderset_coIntersectsRay: xn,
            rawcolliderset_coIntersectsShape: In,
            rawcolliderset_coIsEnabled: wn,
            rawcolliderset_coIsSensor: Ko,
            rawcolliderset_coMass: bn,
            rawcolliderset_coParent: dn,
            rawcolliderset_coProjectPoint: Pn,
            rawcolliderset_coRadius: Zo,
            rawcolliderset_coRestitution: pn,
            rawcolliderset_coRestitutionCombineRule: Ln,
            rawcolliderset_coRotation: qo,
            rawcolliderset_coRoundRadius: an,
            rawcolliderset_coSetActiveCollisionTypes: On,
            rawcolliderset_coSetActiveEvents: Wn,
            rawcolliderset_coSetActiveHooks: qn,
            rawcolliderset_coSetCollisionGroups: Nn,
            rawcolliderset_coSetContactForceEventThreshold: Un,
            rawcolliderset_coSetDensity: Kn,
            rawcolliderset_coSetEnabled: _n,
            rawcolliderset_coSetFriction: Hn,
            rawcolliderset_coSetFrictionCombineRule: zn,
            rawcolliderset_coSetHalfExtents: $o,
            rawcolliderset_coSetHalfHeight: rn,
            rawcolliderset_coSetMass: Xn,
            rawcolliderset_coSetMassProperties: Yn,
            rawcolliderset_coSetRadius: tn,
            rawcolliderset_coSetRestitution: Dn,
            rawcolliderset_coSetRestitutionCombineRule: Gn,
            rawcolliderset_coSetRotation: Vo,
            rawcolliderset_coSetRotationWrtParent: Uo,
            rawcolliderset_coSetRoundRadius: on,
            rawcolliderset_coSetSensor: Fn,
            rawcolliderset_coSetShape: Vn,
            rawcolliderset_coSetSolverGroups: Jn,
            rawcolliderset_coSetTranslation: Wo,
            rawcolliderset_coSetTranslationWrtParent: Oo,
            rawcolliderset_coShapeType: Xo,
            rawcolliderset_coSolverGroups: fn,
            rawcolliderset_coTranslation: Jo,
            rawcolliderset_coVertices: nn,
            rawcolliderset_coVolume: mn,
            rawcolliderset_contains: ts,
            rawcolliderset_createCollider: es,
            rawcolliderset_forEachColliderHandle: is,
            rawcolliderset_isHandleValid: jc,
            rawcolliderset_len: Zn,
            rawcolliderset_new: $n,
            rawcolliderset_remove: rs,
            rawcontactforceevent_collider1: Dl,
            rawcontactforceevent_collider2: Hl,
            rawcontactforceevent_max_force_direction: Wc,
            rawcontactforceevent_max_force_magnitude: Ll,
            rawcontactforceevent_total_force: Bl,
            rawcontactforceevent_total_force_magnitude: zl,
            rawcontactmanifold_contact_dist: Cs,
            rawcontactmanifold_contact_fid1: As,
            rawcontactmanifold_contact_fid2: js,
            rawcontactmanifold_contact_impulse: Is,
            rawcontactmanifold_contact_local_p1: vs,
            rawcontactmanifold_contact_local_p2: Rs,
            rawcontactmanifold_contact_tangent_impulse: Es,
            rawcontactmanifold_local_n1: ms,
            rawcontactmanifold_local_n2: ys,
            rawcontactmanifold_normal: bs,
            rawcontactmanifold_num_contacts: Ss,
            rawcontactmanifold_num_solver_contacts: Ts,
            rawcontactmanifold_solver_contact_dist: xs,
            rawcontactmanifold_solver_contact_friction: Ms,
            rawcontactmanifold_solver_contact_point: Ps,
            rawcontactmanifold_solver_contact_restitution: ks,
            rawcontactmanifold_solver_contact_tangent_velocity: Fs,
            rawcontactmanifold_subshape1: fs,
            rawcontactmanifold_subshape2: gs,
            rawcontactpair_collider1: ws,
            rawcontactpair_collider2: hs,
            rawcontactpair_contactManifold: us,
            rawcontactpair_numContactManifolds: ps,
            rawdebugrenderpipeline_colors: xl,
            rawdebugrenderpipeline_new: Tl,
            rawdebugrenderpipeline_render: Ml,
            rawdebugrenderpipeline_vertices: Pl,
            rawdeserializedworld_takeBodies: hc,
            rawdeserializedworld_takeBroadPhase: _c,
            rawdeserializedworld_takeColliders: pc,
            rawdeserializedworld_takeGravity: lc,
            rawdeserializedworld_takeImpulseJoints: uc,
            rawdeserializedworld_takeIntegrationParameters: cc,
            rawdeserializedworld_takeIslandManager: dc,
            rawdeserializedworld_takeMultibodyJoints: bc,
            rawdeserializedworld_takeNarrowPhase: wc,
            raweventqueue_clear: ql,
            raweventqueue_drainCollisionEvents: Nl,
            raweventqueue_drainContactForceEvents: Jl,
            raweventqueue_new: Gl,
            rawgenericjoint_fixed: na,
            rawgenericjoint_prismatic: oa,
            rawgenericjoint_revolute: sa,
            rawimpulsejointset_contains: ki,
            rawimpulsejointset_createJoint: Pi,
            rawimpulsejointset_forEachJointAttachedToRigidBody: Di,
            rawimpulsejointset_forEachJointHandle: Fi,
            rawimpulsejointset_jointAnchor1: pi,
            rawimpulsejointset_jointAnchor2: ui,
            rawimpulsejointset_jointBodyHandle1: di,
            rawimpulsejointset_jointBodyHandle2: _i,
            rawimpulsejointset_jointConfigureMotor: Ii,
            rawimpulsejointset_jointConfigureMotorModel: Ci,
            rawimpulsejointset_jointConfigureMotorPosition: ji,
            rawimpulsejointset_jointConfigureMotorVelocity: Ai,
            rawimpulsejointset_jointContactsEnabled: yi,
            rawimpulsejointset_jointFrameX1: wi,
            rawimpulsejointset_jointFrameX2: hi,
            rawimpulsejointset_jointLimitsEnabled: gi,
            rawimpulsejointset_jointLimitsMax: vi,
            rawimpulsejointset_jointLimitsMin: Si,
            rawimpulsejointset_jointSetAnchor1: bi,
            rawimpulsejointset_jointSetAnchor2: mi,
            rawimpulsejointset_jointSetContactsEnabled: fi,
            rawimpulsejointset_jointSetLimits: Ri,
            rawimpulsejointset_jointType: ci,
            rawimpulsejointset_len: Mi,
            rawimpulsejointset_new: Ti,
            rawimpulsejointset_remove: xi,
            rawintegrationparameters_allowedLinearError: Gi,
            rawintegrationparameters_dt: zi,
            rawintegrationparameters_erp: Li,
            rawintegrationparameters_maxCcdSubsteps: Oi,
            rawintegrationparameters_maxStabilizationIterations: qi,
            rawintegrationparameters_maxVelocityFrictionIterations: Ji,
            rawintegrationparameters_maxVelocityIterations: Ni,
            rawintegrationparameters_minIslandSize: Wi,
            rawintegrationparameters_new: Bi,
            rawintegrationparameters_predictionDistance: td,
            rawintegrationparameters_set_allowedLinearError: Ki,
            rawintegrationparameters_set_dt: Vi,
            rawintegrationparameters_set_erp: Ui,
            rawintegrationparameters_set_maxCcdSubsteps: ta,
            rawintegrationparameters_set_maxStabilizationIterations: $i,
            rawintegrationparameters_set_maxVelocityFrictionIterations: Qi,
            rawintegrationparameters_set_maxVelocityIterations: Yi,
            rawintegrationparameters_set_minIslandSize: Zi,
            rawintegrationparameters_set_predictionDistance: Xi,
            rawislandmanager_forEachActiveRigidBodyHandle: ia,
            rawislandmanager_new: ra,
            rawkinematiccharactercontroller_autostepEnabled: Br,
            rawkinematiccharactercontroller_autostepIncludesDynamicBodies: Hr,
            rawkinematiccharactercontroller_autostepMaxHeight: Fr,
            rawkinematiccharactercontroller_autostepMinWidth: Dr,
            rawkinematiccharactercontroller_computeColliderMovement: Vr,
            rawkinematiccharactercontroller_computedCollision: Yr,
            rawkinematiccharactercontroller_computedGrounded: Kr,
            rawkinematiccharactercontroller_computedMovement: Ur,
            rawkinematiccharactercontroller_disableAutostep: Lr,
            rawkinematiccharactercontroller_disableSnapToGround: Wr,
            rawkinematiccharactercontroller_enableAutostep: zr,
            rawkinematiccharactercontroller_enableSnapToGround: qr,
            rawkinematiccharactercontroller_maxSlopeClimbAngle: Vc,
            rawkinematiccharactercontroller_minSlopeSlideAngle: Gr,
            rawkinematiccharactercontroller_new: Ir,
            rawkinematiccharactercontroller_numComputedCollisions: Xr,
            rawkinematiccharactercontroller_offset: Pr,
            rawkinematiccharactercontroller_setMaxSlopeClimbAngle: Cc,
            rawkinematiccharactercontroller_setMinSlopeSlideAngle: Nr,
            rawkinematiccharactercontroller_setOffset: xr,
            rawkinematiccharactercontroller_setSlideEnabled: kr,
            rawkinematiccharactercontroller_setUp: Tr,
            rawkinematiccharactercontroller_slideEnabled: Mr,
            rawkinematiccharactercontroller_snapToGroundDistance: Jr,
            rawkinematiccharactercontroller_snapToGroundEnabled: Or,
            rawkinematiccharactercontroller_up: Er,
            rawmultibodyjointset_contains: va,
            rawmultibodyjointset_createJoint: ga,
            rawmultibodyjointset_forEachJointAttachedToRigidBody: Ca,
            rawmultibodyjointset_forEachJointHandle: Ra,
            rawmultibodyjointset_jointAnchor1: _a,
            rawmultibodyjointset_jointAnchor2: wa,
            rawmultibodyjointset_jointContactsEnabled: ha,
            rawmultibodyjointset_jointFrameX1: ca,
            rawmultibodyjointset_jointFrameX2: da,
            rawmultibodyjointset_jointLimitsEnabled: ua,
            rawmultibodyjointset_jointLimitsMax: ma,
            rawmultibodyjointset_jointLimitsMin: ba,
            rawmultibodyjointset_jointSetContactsEnabled: pa,
            rawmultibodyjointset_jointType: la,
            rawmultibodyjointset_new: fa,
            rawmultibodyjointset_remove: Sa,
            rawnarrowphase_contact_pair: ls,
            rawnarrowphase_contacts_with: ss,
            rawnarrowphase_intersection_pair: ds,
            rawnarrowphase_intersections_with: cs,
            rawnarrowphase_new: ns,
            rawphysicspipeline_new: Ol,
            rawphysicspipeline_step: Vl,
            rawphysicspipeline_stepWithEvents: Ul,
            rawpointcolliderprojection_colliderHandle: ad,
            rawpointcolliderprojection_featureId: Gs,
            rawpointcolliderprojection_featureType: Ls,
            rawpointcolliderprojection_isInside: zs,
            rawpointcolliderprojection_point: qc,
            rawpointprojection_isInside: Hs,
            rawpointprojection_point: xc,
            rawquerypipeline_castRay: Ql,
            rawquerypipeline_castRayAndGetNormal: $l,
            rawquerypipeline_castShape: ac,
            rawquerypipeline_collidersWithAabbIntersectingAabb: nc,
            rawquerypipeline_intersectionWithShape: tc,
            rawquerypipeline_intersectionsWithPoint: ic,
            rawquerypipeline_intersectionsWithRay: Zl,
            rawquerypipeline_intersectionsWithShape: oc,
            rawquerypipeline_new: Xl,
            rawquerypipeline_projectPoint: ec,
            rawquerypipeline_projectPointAndGetFeature: rc,
            rawquerypipeline_update: Yl,
            rawraycolliderintersection_colliderHandle: ed,
            rawraycolliderintersection_featureId: Os,
            rawraycolliderintersection_featureType: Ws,
            rawraycolliderintersection_normal: qs,
            rawraycolliderintersection_toi: Kc,
            rawraycollidertoi_colliderHandle: rd,
            rawraycollidertoi_toi: Xc,
            rawrayintersection_featureId: Ec,
            rawrayintersection_featureType: Ic,
            rawrayintersection_normal: kc,
            rawrayintersection_toi: Js,
            rawrigidbodyset_contains: Bo,
            rawrigidbodyset_createRigidBody: Fo,
            rawrigidbodyset_forEachRigidBodyHandle: zo,
            rawrigidbodyset_len: Ho,
            rawrigidbodyset_new: ko,
            rawrigidbodyset_propagateModifiedBodyPositionsToColliders: Lo,
            rawrigidbodyset_rbAddForce: Co,
            rawrigidbodyset_rbAddForceAtPoint: Eo,
            rawrigidbodyset_rbAddTorque: jo,
            rawrigidbodyset_rbAngularDamping: uo,
            rawrigidbodyset_rbAngvel: Ja,
            rawrigidbodyset_rbApplyImpulse: Ao,
            rawrigidbodyset_rbApplyImpulseAtPoint: To,
            rawrigidbodyset_rbApplyTorqueImpulse: Io,
            rawrigidbodyset_rbBodyType: lo,
            rawrigidbodyset_rbCollider: so,
            rawrigidbodyset_rbDominanceGroup: Va,
            rawrigidbodyset_rbEffectiveAngularInertia: io,
            rawrigidbodyset_rbEffectiveInvMass: Qa,
            rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt: ro,
            rawrigidbodyset_rbEnableCcd: Ka,
            rawrigidbodyset_rbGravityScale: go,
            rawrigidbodyset_rbInvMass: Ya,
            rawrigidbodyset_rbInvPrincipalInertiaSqrt: to,
            rawrigidbodyset_rbIsCcdEnabled: oo,
            rawrigidbodyset_rbIsDynamic: ho,
            rawrigidbodyset_rbIsEnabled: fo,
            rawrigidbodyset_rbIsFixed: _o,
            rawrigidbodyset_rbIsKinematic: wo,
            rawrigidbodyset_rbIsMoving: Ta,
            rawrigidbodyset_rbIsSleeping: Ea,
            rawrigidbodyset_rbLinearDamping: po,
            rawrigidbodyset_rbLinvel: Na,
            rawrigidbodyset_rbLocalCom: $a,
            rawrigidbodyset_rbLockRotations: Oa,
            rawrigidbodyset_rbLockTranslations: qa,
            rawrigidbodyset_rbMass: Xa,
            rawrigidbodyset_rbNextRotation: xa,
            rawrigidbodyset_rbNextTranslation: Pa,
            rawrigidbodyset_rbNumColliders: no,
            rawrigidbodyset_rbPrincipalInertia: eo,
            rawrigidbodyset_rbRecomputeMassPropertiesFromColliders: za,
            rawrigidbodyset_rbResetForces: vo,
            rawrigidbodyset_rbResetTorques: Ro,
            rawrigidbodyset_rbRotation: ja,
            rawrigidbodyset_rbSetAdditionalMass: La,
            rawrigidbodyset_rbSetAdditionalMassProperties: Ga,
            rawrigidbodyset_rbSetAngularDamping: mo,
            rawrigidbodyset_rbSetAngvel: Da,
            rawrigidbodyset_rbSetBodyType: co,
            rawrigidbodyset_rbSetDominanceGroup: Ua,
            rawrigidbodyset_rbSetEnabled: yo,
            rawrigidbodyset_rbSetEnabledTranslations: Wa,
            rawrigidbodyset_rbSetGravityScale: So,
            rawrigidbodyset_rbSetLinearDamping: bo,
            rawrigidbodyset_rbSetLinvel: Fa,
            rawrigidbodyset_rbSetNextKinematicRotation: Ba,
            rawrigidbodyset_rbSetNextKinematicTranslation: Ha,
            rawrigidbodyset_rbSetRotation: ka,
            rawrigidbodyset_rbSetTranslation: Ma,
            rawrigidbodyset_rbSetUserData: xo,
            rawrigidbodyset_rbSleep: Ia,
            rawrigidbodyset_rbTranslation: Aa,
            rawrigidbodyset_rbUserData: Po,
            rawrigidbodyset_rbWakeUp: ao,
            rawrigidbodyset_rbWorldCom: Za,
            rawrigidbodyset_remove: Do,
            rawrotation_angle: vl,
            rawrotation_fromAngle: gl,
            rawrotation_identity: fl,
            rawrotation_im: Sl,
            rawrotation_re: Qc,
            rawserializationpipeline_deserializeAll: yc,
            rawserializationpipeline_new: Oc,
            rawserializationpipeline_serializeAll: mc,
            rawshape_ball: Xs,
            rawshape_capsule: Qs,
            rawshape_castRay: pl,
            rawshape_castRayAndGetNormal: ul,
            rawshape_castShape: ll,
            rawshape_contactShape: dl,
            rawshape_containsPoint: _l,
            rawshape_convexHull: al,
            rawshape_convexPolyline: nl,
            rawshape_cuboid: Us,
            rawshape_halfspace: Ys,
            rawshape_heightfield: tl,
            rawshape_intersectsRay: hl,
            rawshape_intersectsShape: cl,
            rawshape_polyline: $s,
            rawshape_projectPoint: wl,
            rawshape_roundConvexHull: ol,
            rawshape_roundConvexPolyline: sl,
            rawshape_roundCuboid: Ks,
            rawshape_roundTriangle: il,
            rawshape_segment: el,
            rawshape_triangle: rl,
            rawshape_trimesh: Zs,
            rawshapecollidertoi_colliderHandle: id,
            rawshapecollidertoi_normal1: Nc,
            rawshapecollidertoi_normal2: Jc,
            rawshapecollidertoi_toi: ml,
            rawshapecollidertoi_witness1: Lc,
            rawshapecollidertoi_witness2: Gc,
            rawshapecontact_distance: Uc,
            rawshapecontact_normal1: Mc,
            rawshapecontact_normal2: Pc,
            rawshapecontact_point1: Tc,
            rawshapecontact_point2: Fc,
            rawshapetoi_normal1: Bc,
            rawshapetoi_normal2: zc,
            rawshapetoi_toi: Yc,
            rawshapetoi_witness1: Dc,
            rawshapetoi_witness2: Hc,
            rawvector_new: Cl,
            rawvector_set_x: Ac,
            rawvector_set_y: Al,
            rawvector_x: $c,
            rawvector_xy: jl,
            rawvector_y: Zc,
            rawvector_yx: Il,
            rawvector_zero: Rl,
            version: Ar,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      );
    let i;
    "memory" in We
      ? (i = We)
      : (i = new WebAssembly.Instance(void 0, { "./rapier_wasm2d_bg.js": Sr })
          .exports);
    const S = new Array(32).fill(void 0);
    S.push(void 0, null, !0, !1);
    function v(e) {
      return S[e];
    }
    let mt = S.length;
    function dd(e) {
      e < 36 || ((S[e] = mt), (mt = e));
    }
    function Kt(e) {
      const t = v(e);
      return dd(e), t;
    }
    function x(e) {
      mt === S.length && S.push(S.length + 1);
      const t = mt;
      return (mt = S[t]), (S[t] = e), t;
    }
    function m(e) {
      return e == null;
    }
    let xe = new Float64Array();
    function Xt() {
      return (
        xe.byteLength === 0 && (xe = new Float64Array(i.memory.buffer)), xe
      );
    }
    let Me = new Int32Array();
    function I() {
      return Me.byteLength === 0 && (Me = new Int32Array(i.memory.buffer)), Me;
    }
    const _d =
      typeof TextDecoder > "u"
        ? (0, module.require)("util").TextDecoder
        : TextDecoder;
    let Oe = new _d("utf-8", { ignoreBOM: !0, fatal: !0 });
    Oe.decode();
    let ke = new Uint8Array();
    function wd() {
      return ke.byteLength === 0 && (ke = new Uint8Array(i.memory.buffer)), ke;
    }
    function Ve(e, t) {
      return Oe.decode(wd().subarray(e, e + t));
    }
    function Ue() {
      try {
        const r = i.__wbindgen_add_to_stack_pointer(-16);
        i.version(r);
        var e = I()[r / 4 + 0],
          t = I()[r / 4 + 1];
        return Ve(e, t);
      } finally {
        i.__wbindgen_add_to_stack_pointer(16), i.__wbindgen_free(e, t);
      }
    }
    function l(e, t) {
      if (!(e instanceof t)) throw new Error(`expected instance of ${t.name}`);
      return e.ptr;
    }
    let Fe = new Float32Array();
    function K() {
      return (
        Fe.byteLength === 0 && (Fe = new Float32Array(i.memory.buffer)), Fe
      );
    }
    let A = 32;
    function T(e) {
      if (A == 1) throw new Error("out of js stack");
      return (S[--A] = e), A;
    }
    function Ke(e, t) {
      return K().subarray(e / 4, e / 4 + t);
    }
    let De = new Uint32Array();
    function Xe() {
      return De.byteLength === 0 && (De = new Uint32Array(i.memory.buffer)), De;
    }
    function hd(e, t) {
      return Xe().subarray(e / 4, e / 4 + t);
    }
    let B = 0;
    function $(e, t) {
      const r = t(e.length * 4);
      return K().set(e, r / 4), (B = e.length), r;
    }
    function Ye(e, t) {
      const r = t(e.length * 4);
      return Xe().set(e, r / 4), (B = e.length), r;
    }
    function He(e, t) {
      try {
        return e.apply(this, t);
      } catch (r) {
        i.__wbindgen_exn_store(x(r));
      }
    }
    const pd = Object.freeze({
        Revolute: 0,
        0: "Revolute",
        Fixed: 1,
        1: "Fixed",
        Prismatic: 2,
        2: "Prismatic",
        Generic: 3,
        3: "Generic",
      }),
      ud = Object.freeze({
        AccelerationBased: 0,
        0: "AccelerationBased",
        ForceBased: 1,
        1: "ForceBased",
      }),
      yt = Object.freeze({ X: 0, 0: "X", Y: 1, 1: "Y", AngX: 2, 2: "AngX" }),
      bd = Object.freeze({
        Dynamic: 0,
        0: "Dynamic",
        Fixed: 1,
        1: "Fixed",
        KinematicPositionBased: 2,
        2: "KinematicPositionBased",
        KinematicVelocityBased: 3,
        3: "KinematicVelocityBased",
      }),
      md = Object.freeze({
        Vertex: 0,
        0: "Vertex",
        Face: 1,
        1: "Face",
        Unknown: 2,
        2: "Unknown",
      }),
      yd = Object.freeze({
        Ball: 0,
        0: "Ball",
        Cuboid: 1,
        1: "Cuboid",
        Capsule: 2,
        2: "Capsule",
        Segment: 3,
        3: "Segment",
        Polyline: 4,
        4: "Polyline",
        Triangle: 5,
        5: "Triangle",
        TriMesh: 6,
        6: "TriMesh",
        HeightField: 7,
        7: "HeightField",
        Compound: 8,
        8: "Compound",
        ConvexPolygon: 9,
        9: "ConvexPolygon",
        RoundCuboid: 10,
        10: "RoundCuboid",
        RoundTriangle: 11,
        11: "RoundTriangle",
        RoundConvexPolygon: 12,
        12: "RoundConvexPolygon",
        HalfSpace: 13,
        13: "HalfSpace",
      });
    class W {
      static __wrap(t) {
        const r = Object.create(W.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawbroadphase_free(t);
      }
      constructor() {
        const t = i.rawbroadphase_new();
        return W.__wrap(t);
      }
    }
    class Z {
      static __wrap(t) {
        const r = Object.create(Z.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawccdsolver_free(t);
      }
      constructor() {
        const t = i.rawccdsolver_new();
        return Z.__wrap(t);
      }
    }
    class at {
      static __wrap(t) {
        const r = Object.create(at.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawcharactercollision_free(t);
      }
      constructor() {
        const t = i.rawcharactercollision_new();
        return at.__wrap(t);
      }
      handle() {
        return i.rawcharactercollision_handle(this.ptr);
      }
      translationApplied() {
        const t = i.rawcharactercollision_translationApplied(this.ptr);
        return w.__wrap(t);
      }
      translationRemaining() {
        const t = i.rawcharactercollision_translationRemaining(this.ptr);
        return w.__wrap(t);
      }
      toi() {
        return i.rawcharactercollision_toi(this.ptr);
      }
      worldWitness1() {
        const t = i.rawcharactercollision_worldWitness1(this.ptr);
        return w.__wrap(t);
      }
      worldWitness2() {
        const t = i.rawcharactercollision_worldWitness2(this.ptr);
        return w.__wrap(t);
      }
      worldNormal1() {
        const t = i.rawcharactercollision_worldNormal1(this.ptr);
        return w.__wrap(t);
      }
      worldNormal2() {
        const t = i.rawcharactercollision_worldNormal2(this.ptr);
        return w.__wrap(t);
      }
    }
    class E {
      static __wrap(t) {
        const r = Object.create(E.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawcolliderset_free(t);
      }
      coTranslation(t) {
        const r = i.rawcolliderset_coTranslation(this.ptr, t);
        return w.__wrap(r);
      }
      coRotation(t) {
        const r = i.rawcolliderset_coRotation(this.ptr, t);
        return g.__wrap(r);
      }
      coSetTranslation(t, r, a) {
        i.rawcolliderset_coSetTranslation(this.ptr, t, r, a);
      }
      coSetTranslationWrtParent(t, r, a) {
        i.rawcolliderset_coSetTranslationWrtParent(this.ptr, t, r, a);
      }
      coSetRotation(t, r) {
        i.rawcolliderset_coSetRotation(this.ptr, t, r);
      }
      coSetRotationWrtParent(t, r) {
        i.rawcolliderset_coSetRotationWrtParent(this.ptr, t, r);
      }
      coIsSensor(t) {
        return i.rawcolliderset_coIsSensor(this.ptr, t) !== 0;
      }
      coShapeType(t) {
        return i.rawcolliderset_coShapeType(this.ptr, t) >>> 0;
      }
      coHalfspaceNormal(t) {
        const r = i.rawcolliderset_coHalfspaceNormal(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      coHalfExtents(t) {
        const r = i.rawcolliderset_coHalfExtents(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      coSetHalfExtents(t, r) {
        l(r, w), i.rawcolliderset_coSetHalfExtents(this.ptr, t, r.ptr);
      }
      coRadius(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coRadius(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = K()[n / 4 + 1];
          return r === 0 ? void 0 : a;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coSetRadius(t, r) {
        i.rawcolliderset_coSetRadius(this.ptr, t, r);
      }
      coHalfHeight(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coHalfHeight(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = K()[n / 4 + 1];
          return r === 0 ? void 0 : a;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coSetHalfHeight(t, r) {
        i.rawcolliderset_coSetHalfHeight(this.ptr, t, r);
      }
      coRoundRadius(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coRoundRadius(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = K()[n / 4 + 1];
          return r === 0 ? void 0 : a;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coSetRoundRadius(t, r) {
        i.rawcolliderset_coSetRoundRadius(this.ptr, t, r);
      }
      coVertices(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coVertices(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = I()[n / 4 + 1];
          let s;
          return (
            r !== 0 && ((s = Ke(r, a).slice()), i.__wbindgen_free(r, a * 4)), s
          );
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coIndices(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coIndices(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = I()[n / 4 + 1];
          let s;
          return (
            r !== 0 && ((s = hd(r, a).slice()), i.__wbindgen_free(r, a * 4)), s
          );
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coHeightfieldHeights(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coHeightfieldHeights(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = I()[n / 4 + 1];
          let s;
          return (
            r !== 0 && ((s = Ke(r, a).slice()), i.__wbindgen_free(r, a * 4)), s
          );
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coHeightfieldScale(t) {
        const r = i.rawcolliderset_coHeightfieldScale(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      coParent(t) {
        try {
          const n = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawcolliderset_coParent(n, this.ptr, t);
          var r = I()[n / 4 + 0],
            a = Xt()[n / 8 + 1];
          return r === 0 ? void 0 : a;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      coSetEnabled(t, r) {
        i.rawcolliderset_coSetEnabled(this.ptr, t, r);
      }
      coIsEnabled(t) {
        return i.rawcolliderset_coIsEnabled(this.ptr, t) !== 0;
      }
      coFriction(t) {
        return i.rawcolliderset_coFriction(this.ptr, t);
      }
      coRestitution(t) {
        return i.rawcolliderset_coRestitution(this.ptr, t);
      }
      coDensity(t) {
        return i.rawcolliderset_coDensity(this.ptr, t);
      }
      coMass(t) {
        return i.rawcolliderset_coMass(this.ptr, t);
      }
      coVolume(t) {
        return i.rawcolliderset_coVolume(this.ptr, t);
      }
      coCollisionGroups(t) {
        return i.rawcolliderset_coCollisionGroups(this.ptr, t) >>> 0;
      }
      coSolverGroups(t) {
        return i.rawcolliderset_coSolverGroups(this.ptr, t) >>> 0;
      }
      coActiveHooks(t) {
        return i.rawcolliderset_coActiveHooks(this.ptr, t) >>> 0;
      }
      coActiveCollisionTypes(t) {
        return i.rawcolliderset_coActiveCollisionTypes(this.ptr, t);
      }
      coActiveEvents(t) {
        return i.rawcolliderset_coActiveEvents(this.ptr, t) >>> 0;
      }
      coContactForceEventThreshold(t) {
        return i.rawcolliderset_coContactForceEventThreshold(this.ptr, t);
      }
      coContainsPoint(t, r) {
        return (
          l(r, w), i.rawcolliderset_coContainsPoint(this.ptr, t, r.ptr) !== 0
        );
      }
      coCastShape(t, r, a, n, s, c, _, h) {
        l(r, w), l(a, f), l(n, w), l(s, g), l(c, w);
        const p = i.rawcolliderset_coCastShape(
          this.ptr,
          t,
          r.ptr,
          a.ptr,
          n.ptr,
          s.ptr,
          c.ptr,
          _,
          h
        );
        return p === 0 ? void 0 : Et.__wrap(p);
      }
      coCastCollider(t, r, a, n, s, c) {
        l(r, w), l(n, w);
        const _ = i.rawcolliderset_coCastCollider(
          this.ptr,
          t,
          r.ptr,
          a,
          n.ptr,
          s,
          c
        );
        return _ === 0 ? void 0 : It.__wrap(_);
      }
      coIntersectsShape(t, r, a, n) {
        return (
          l(r, f),
          l(a, w),
          l(n, g),
          i.rawcolliderset_coIntersectsShape(
            this.ptr,
            t,
            r.ptr,
            a.ptr,
            n.ptr
          ) !== 0
        );
      }
      coContactShape(t, r, a, n, s) {
        l(r, f), l(a, w), l(n, g);
        const c = i.rawcolliderset_coContactShape(
          this.ptr,
          t,
          r.ptr,
          a.ptr,
          n.ptr,
          s
        );
        return c === 0 ? void 0 : st.__wrap(c);
      }
      coContactCollider(t, r, a) {
        const n = i.rawcolliderset_coContactCollider(this.ptr, t, r, a);
        return n === 0 ? void 0 : st.__wrap(n);
      }
      coProjectPoint(t, r, a) {
        l(r, w);
        const n = i.rawcolliderset_coProjectPoint(this.ptr, t, r.ptr, a);
        return Rt.__wrap(n);
      }
      coIntersectsRay(t, r, a, n) {
        return (
          l(r, w),
          l(a, w),
          i.rawcolliderset_coIntersectsRay(this.ptr, t, r.ptr, a.ptr, n) !== 0
        );
      }
      coCastRay(t, r, a, n, s) {
        return (
          l(r, w),
          l(a, w),
          i.rawcolliderset_coCastRay(this.ptr, t, r.ptr, a.ptr, n, s)
        );
      }
      coCastRayAndGetNormal(t, r, a, n, s) {
        l(r, w), l(a, w);
        const c = i.rawcolliderset_coCastRayAndGetNormal(
          this.ptr,
          t,
          r.ptr,
          a.ptr,
          n,
          s
        );
        return c === 0 ? void 0 : At.__wrap(c);
      }
      coSetSensor(t, r) {
        i.rawcolliderset_coSetSensor(this.ptr, t, r);
      }
      coSetRestitution(t, r) {
        i.rawcolliderset_coSetRestitution(this.ptr, t, r);
      }
      coSetFriction(t, r) {
        i.rawcolliderset_coSetFriction(this.ptr, t, r);
      }
      coFrictionCombineRule(t) {
        return i.rawcolliderset_coFrictionCombineRule(this.ptr, t) >>> 0;
      }
      coSetFrictionCombineRule(t, r) {
        i.rawcolliderset_coSetFrictionCombineRule(this.ptr, t, r);
      }
      coRestitutionCombineRule(t) {
        return i.rawcolliderset_coRestitutionCombineRule(this.ptr, t) >>> 0;
      }
      coSetRestitutionCombineRule(t, r) {
        i.rawcolliderset_coSetRestitutionCombineRule(this.ptr, t, r);
      }
      coSetCollisionGroups(t, r) {
        i.rawcolliderset_coSetCollisionGroups(this.ptr, t, r);
      }
      coSetSolverGroups(t, r) {
        i.rawcolliderset_coSetSolverGroups(this.ptr, t, r);
      }
      coSetActiveHooks(t, r) {
        i.rawcolliderset_coSetActiveHooks(this.ptr, t, r);
      }
      coSetActiveEvents(t, r) {
        i.rawcolliderset_coSetActiveEvents(this.ptr, t, r);
      }
      coSetActiveCollisionTypes(t, r) {
        i.rawcolliderset_coSetActiveCollisionTypes(this.ptr, t, r);
      }
      coSetShape(t, r) {
        l(r, f), i.rawcolliderset_coSetShape(this.ptr, t, r.ptr);
      }
      coSetContactForceEventThreshold(t, r) {
        i.rawcolliderset_coSetContactForceEventThreshold(this.ptr, t, r);
      }
      coSetDensity(t, r) {
        i.rawcolliderset_coSetDensity(this.ptr, t, r);
      }
      coSetMass(t, r) {
        i.rawcolliderset_coSetMass(this.ptr, t, r);
      }
      coSetMassProperties(t, r, a, n) {
        l(a, w), i.rawcolliderset_coSetMassProperties(this.ptr, t, r, a.ptr, n);
      }
      constructor() {
        const t = i.rawcolliderset_new();
        return E.__wrap(t);
      }
      len() {
        return i.rawcolliderset_len(this.ptr) >>> 0;
      }
      contains(t) {
        return i.rawcolliderset_contains(this.ptr, t) !== 0;
      }
      createCollider(
        t,
        r,
        a,
        n,
        s,
        c,
        _,
        h,
        p,
        u,
        b,
        y,
        j,
        F,
        V,
        U,
        tt,
        Be,
        ze,
        Le,
        fd,
        gd,
        fr
      ) {
        try {
          const Ge = i.__wbindgen_add_to_stack_pointer(-16);
          l(r, f),
            l(a, w),
            l(n, g),
            l(_, w),
            l(fr, P),
            i.rawcolliderset_createCollider(
              Ge,
              this.ptr,
              t,
              r.ptr,
              a.ptr,
              n.ptr,
              s,
              c,
              _.ptr,
              h,
              p,
              u,
              b,
              y,
              j,
              F,
              V,
              U,
              tt,
              Be,
              ze,
              Le,
              fd,
              gd,
              fr.ptr
            );
          var Sd = I()[Ge / 4 + 0],
            vd = Xt()[Ge / 8 + 1];
          return Sd === 0 ? void 0 : vd;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      remove(t, r, a, n) {
        l(r, G), l(a, P), i.rawcolliderset_remove(this.ptr, t, r.ptr, a.ptr, n);
      }
      isHandleValid(t) {
        return i.rawcolliderset_contains(this.ptr, t) !== 0;
      }
      forEachColliderHandle(t) {
        try {
          i.rawcolliderset_forEachColliderHandle(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
    }
    class Yt {
      static __wrap(t) {
        const r = Object.create(Yt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawcontactforceevent_free(t);
      }
      collider1() {
        return i.rawcontactforceevent_collider1(this.ptr);
      }
      collider2() {
        return i.rawcontactforceevent_collider2(this.ptr);
      }
      total_force() {
        const t = i.rawcontactforceevent_total_force(this.ptr);
        return w.__wrap(t);
      }
      total_force_magnitude() {
        return i.rawcontactforceevent_total_force_magnitude(this.ptr);
      }
      max_force_direction() {
        const t = i.rawcharactercollision_translationApplied(this.ptr);
        return w.__wrap(t);
      }
      max_force_magnitude() {
        return i.rawcontactforceevent_max_force_magnitude(this.ptr);
      }
    }
    class Qt {
      static __wrap(t) {
        const r = Object.create(Qt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawcontactmanifold_free(t);
      }
      normal() {
        const t = i.rawcontactmanifold_normal(this.ptr);
        return w.__wrap(t);
      }
      local_n1() {
        const t = i.rawcontactmanifold_local_n1(this.ptr);
        return w.__wrap(t);
      }
      local_n2() {
        const t = i.rawcontactmanifold_local_n2(this.ptr);
        return w.__wrap(t);
      }
      subshape1() {
        return i.rawcontactmanifold_subshape1(this.ptr) >>> 0;
      }
      subshape2() {
        return i.rawcontactmanifold_subshape2(this.ptr) >>> 0;
      }
      num_contacts() {
        return i.rawcontactmanifold_num_contacts(this.ptr) >>> 0;
      }
      contact_local_p1(t) {
        const r = i.rawcontactmanifold_contact_local_p1(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      contact_local_p2(t) {
        const r = i.rawcontactmanifold_contact_local_p2(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      contact_dist(t) {
        return i.rawcontactmanifold_contact_dist(this.ptr, t);
      }
      contact_fid1(t) {
        return i.rawcontactmanifold_contact_fid1(this.ptr, t) >>> 0;
      }
      contact_fid2(t) {
        return i.rawcontactmanifold_contact_fid2(this.ptr, t) >>> 0;
      }
      contact_impulse(t) {
        return i.rawcontactmanifold_contact_impulse(this.ptr, t);
      }
      contact_tangent_impulse(t) {
        return i.rawcontactmanifold_contact_tangent_impulse(this.ptr, t);
      }
      num_solver_contacts() {
        return i.rawcontactmanifold_num_solver_contacts(this.ptr) >>> 0;
      }
      solver_contact_point(t) {
        const r = i.rawcontactmanifold_solver_contact_point(this.ptr, t);
        return r === 0 ? void 0 : w.__wrap(r);
      }
      solver_contact_dist(t) {
        return i.rawcontactmanifold_solver_contact_dist(this.ptr, t);
      }
      solver_contact_friction(t) {
        return i.rawcontactmanifold_solver_contact_friction(this.ptr, t);
      }
      solver_contact_restitution(t) {
        return i.rawcontactmanifold_solver_contact_restitution(this.ptr, t);
      }
      solver_contact_tangent_velocity(t) {
        const r = i.rawcontactmanifold_solver_contact_tangent_velocity(
          this.ptr,
          t
        );
        return w.__wrap(r);
      }
    }
    class $t {
      static __wrap(t) {
        const r = Object.create($t.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawcontactpair_free(t);
      }
      collider1() {
        return i.rawcontactpair_collider1(this.ptr);
      }
      collider2() {
        return i.rawcontactpair_collider2(this.ptr);
      }
      numContactManifolds() {
        return i.rawcontactpair_numContactManifolds(this.ptr) >>> 0;
      }
      contactManifold(t) {
        const r = i.rawcontactpair_contactManifold(this.ptr, t);
        return r === 0 ? void 0 : Qt.__wrap(r);
      }
    }
    class ft {
      static __wrap(t) {
        const r = Object.create(ft.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawdebugrenderpipeline_free(t);
      }
      constructor() {
        const t = i.rawdebugrenderpipeline_new();
        return ft.__wrap(t);
      }
      vertices() {
        const t = i.rawdebugrenderpipeline_vertices(this.ptr);
        return Kt(t);
      }
      colors() {
        const t = i.rawdebugrenderpipeline_colors(this.ptr);
        return Kt(t);
      }
      render(t, r, a, n, s) {
        l(t, P),
          l(r, E),
          l(a, L),
          l(n, N),
          l(s, q),
          i.rawdebugrenderpipeline_render(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s.ptr
          );
      }
    }
    class Zt {
      static __wrap(t) {
        const r = Object.create(Zt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawdeserializedworld_free(t);
      }
      takeGravity() {
        const t = i.rawdeserializedworld_takeGravity(this.ptr);
        return t === 0 ? void 0 : w.__wrap(t);
      }
      takeIntegrationParameters() {
        const t = i.rawdeserializedworld_takeIntegrationParameters(this.ptr);
        return t === 0 ? void 0 : O.__wrap(t);
      }
      takeIslandManager() {
        const t = i.rawdeserializedworld_takeIslandManager(this.ptr);
        return t === 0 ? void 0 : G.__wrap(t);
      }
      takeBroadPhase() {
        const t = i.rawdeserializedworld_takeBroadPhase(this.ptr);
        return t === 0 ? void 0 : W.__wrap(t);
      }
      takeNarrowPhase() {
        const t = i.rawdeserializedworld_takeNarrowPhase(this.ptr);
        return t === 0 ? void 0 : q.__wrap(t);
      }
      takeBodies() {
        const t = i.rawdeserializedworld_takeBodies(this.ptr);
        return t === 0 ? void 0 : P.__wrap(t);
      }
      takeColliders() {
        const t = i.rawdeserializedworld_takeColliders(this.ptr);
        return t === 0 ? void 0 : E.__wrap(t);
      }
      takeImpulseJoints() {
        const t = i.rawdeserializedworld_takeImpulseJoints(this.ptr);
        return t === 0 ? void 0 : L.__wrap(t);
      }
      takeMultibodyJoints() {
        const t = i.rawdeserializedworld_takeMultibodyJoints(this.ptr);
        return t === 0 ? void 0 : N.__wrap(t);
      }
    }
    class ot {
      static __wrap(t) {
        const r = Object.create(ot.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_raweventqueue_free(t);
      }
      constructor(t) {
        const r = i.raweventqueue_new(t);
        return ot.__wrap(r);
      }
      drainCollisionEvents(t) {
        try {
          i.raweventqueue_drainCollisionEvents(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
      drainContactForceEvents(t) {
        try {
          i.raweventqueue_drainContactForceEvents(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
      clear() {
        i.raweventqueue_clear(this.ptr);
      }
    }
    class z {
      static __wrap(t) {
        const r = Object.create(z.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawgenericjoint_free(t);
      }
      static prismatic(t, r, a, n, s, c) {
        l(t, w), l(r, w), l(a, w);
        const _ = i.rawgenericjoint_prismatic(t.ptr, r.ptr, a.ptr, n, s, c);
        return _ === 0 ? void 0 : z.__wrap(_);
      }
      static fixed(t, r, a, n) {
        l(t, w), l(r, g), l(a, w), l(n, g);
        const s = i.rawgenericjoint_fixed(t.ptr, r.ptr, a.ptr, n.ptr);
        return z.__wrap(s);
      }
      static revolute(t, r) {
        l(t, w), l(r, w);
        const a = i.rawgenericjoint_revolute(t.ptr, r.ptr);
        return a === 0 ? void 0 : z.__wrap(a);
      }
    }
    class L {
      static __wrap(t) {
        const r = Object.create(L.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawimpulsejointset_free(t);
      }
      jointType(t) {
        return i.rawimpulsejointset_jointType(this.ptr, t) >>> 0;
      }
      jointBodyHandle1(t) {
        return i.rawimpulsejointset_jointBodyHandle1(this.ptr, t);
      }
      jointBodyHandle2(t) {
        return i.rawimpulsejointset_jointBodyHandle2(this.ptr, t);
      }
      jointFrameX1(t) {
        const r = i.rawimpulsejointset_jointFrameX1(this.ptr, t);
        return g.__wrap(r);
      }
      jointFrameX2(t) {
        const r = i.rawimpulsejointset_jointFrameX2(this.ptr, t);
        return g.__wrap(r);
      }
      jointAnchor1(t) {
        const r = i.rawimpulsejointset_jointAnchor1(this.ptr, t);
        return w.__wrap(r);
      }
      jointAnchor2(t) {
        const r = i.rawimpulsejointset_jointAnchor2(this.ptr, t);
        return w.__wrap(r);
      }
      jointSetAnchor1(t, r) {
        l(r, w), i.rawimpulsejointset_jointSetAnchor1(this.ptr, t, r.ptr);
      }
      jointSetAnchor2(t, r) {
        l(r, w), i.rawimpulsejointset_jointSetAnchor2(this.ptr, t, r.ptr);
      }
      jointContactsEnabled(t) {
        return i.rawimpulsejointset_jointContactsEnabled(this.ptr, t) !== 0;
      }
      jointSetContactsEnabled(t, r) {
        i.rawimpulsejointset_jointSetContactsEnabled(this.ptr, t, r);
      }
      jointLimitsEnabled(t, r) {
        return i.rawimpulsejointset_jointLimitsEnabled(this.ptr, t, r) !== 0;
      }
      jointLimitsMin(t, r) {
        return i.rawimpulsejointset_jointLimitsMin(this.ptr, t, r);
      }
      jointLimitsMax(t, r) {
        return i.rawimpulsejointset_jointLimitsMax(this.ptr, t, r);
      }
      jointSetLimits(t, r, a, n) {
        i.rawimpulsejointset_jointSetLimits(this.ptr, t, r, a, n);
      }
      jointConfigureMotorModel(t, r, a) {
        i.rawimpulsejointset_jointConfigureMotorModel(this.ptr, t, r, a);
      }
      jointConfigureMotorVelocity(t, r, a, n) {
        i.rawimpulsejointset_jointConfigureMotorVelocity(this.ptr, t, r, a, n);
      }
      jointConfigureMotorPosition(t, r, a, n, s) {
        i.rawimpulsejointset_jointConfigureMotorPosition(
          this.ptr,
          t,
          r,
          a,
          n,
          s
        );
      }
      jointConfigureMotor(t, r, a, n, s, c) {
        i.rawimpulsejointset_jointConfigureMotor(this.ptr, t, r, a, n, s, c);
      }
      constructor() {
        const t = i.rawimpulsejointset_new();
        return L.__wrap(t);
      }
      createJoint(t, r, a, n) {
        return (
          l(t, z), i.rawimpulsejointset_createJoint(this.ptr, t.ptr, r, a, n)
        );
      }
      remove(t, r) {
        i.rawimpulsejointset_remove(this.ptr, t, r);
      }
      len() {
        return i.rawimpulsejointset_len(this.ptr) >>> 0;
      }
      contains(t) {
        return i.rawimpulsejointset_contains(this.ptr, t) !== 0;
      }
      forEachJointHandle(t) {
        try {
          i.rawimpulsejointset_forEachJointHandle(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
      forEachJointAttachedToRigidBody(t, r) {
        try {
          i.rawimpulsejointset_forEachJointAttachedToRigidBody(
            this.ptr,
            t,
            T(r)
          );
        } finally {
          S[A++] = void 0;
        }
      }
    }
    class O {
      static __wrap(t) {
        const r = Object.create(O.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawintegrationparameters_free(t);
      }
      constructor() {
        const t = i.rawintegrationparameters_new();
        return O.__wrap(t);
      }
      get dt() {
        return i.rawintegrationparameters_dt(this.ptr);
      }
      get erp() {
        return i.rawintegrationparameters_erp(this.ptr);
      }
      get allowedLinearError() {
        return i.rawintegrationparameters_allowedLinearError(this.ptr);
      }
      get predictionDistance() {
        return i.rawcontactforceevent_total_force_magnitude(this.ptr);
      }
      get maxVelocityIterations() {
        return i.rawintegrationparameters_maxVelocityIterations(this.ptr) >>> 0;
      }
      get maxVelocityFrictionIterations() {
        return (
          i.rawintegrationparameters_maxVelocityFrictionIterations(this.ptr) >>>
          0
        );
      }
      get maxStabilizationIterations() {
        return (
          i.rawintegrationparameters_maxStabilizationIterations(this.ptr) >>> 0
        );
      }
      get minIslandSize() {
        return i.rawintegrationparameters_minIslandSize(this.ptr) >>> 0;
      }
      get maxCcdSubsteps() {
        return i.rawintegrationparameters_maxCcdSubsteps(this.ptr) >>> 0;
      }
      set dt(t) {
        i.rawintegrationparameters_set_dt(this.ptr, t);
      }
      set erp(t) {
        i.rawintegrationparameters_set_erp(this.ptr, t);
      }
      set allowedLinearError(t) {
        i.rawintegrationparameters_set_allowedLinearError(this.ptr, t);
      }
      set predictionDistance(t) {
        i.rawintegrationparameters_set_predictionDistance(this.ptr, t);
      }
      set maxVelocityIterations(t) {
        i.rawintegrationparameters_set_maxVelocityIterations(this.ptr, t);
      }
      set maxVelocityFrictionIterations(t) {
        i.rawintegrationparameters_set_maxVelocityFrictionIterations(
          this.ptr,
          t
        );
      }
      set maxStabilizationIterations(t) {
        i.rawintegrationparameters_set_maxStabilizationIterations(this.ptr, t);
      }
      set minIslandSize(t) {
        i.rawintegrationparameters_set_minIslandSize(this.ptr, t);
      }
      set maxCcdSubsteps(t) {
        i.rawintegrationparameters_set_maxCcdSubsteps(this.ptr, t);
      }
    }
    class G {
      static __wrap(t) {
        const r = Object.create(G.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawislandmanager_free(t);
      }
      constructor() {
        const t = i.rawislandmanager_new();
        return G.__wrap(t);
      }
      forEachActiveRigidBodyHandle(t) {
        try {
          i.rawislandmanager_forEachActiveRigidBodyHandle(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
    }
    class gt {
      static __wrap(t) {
        const r = Object.create(gt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawkinematiccharactercontroller_free(t);
      }
      constructor(t) {
        const r = i.rawkinematiccharactercontroller_new(t);
        return gt.__wrap(r);
      }
      up() {
        const t = i.rawkinematiccharactercontroller_up(this.ptr);
        return w.__wrap(t);
      }
      setUp(t) {
        l(t, w), i.rawkinematiccharactercontroller_setUp(this.ptr, t.ptr);
      }
      offset() {
        return i.rawkinematiccharactercontroller_offset(this.ptr);
      }
      setOffset(t) {
        i.rawkinematiccharactercontroller_setOffset(this.ptr, t);
      }
      slideEnabled() {
        return i.rawkinematiccharactercontroller_slideEnabled(this.ptr) !== 0;
      }
      setSlideEnabled(t) {
        i.rawkinematiccharactercontroller_setSlideEnabled(this.ptr, t);
      }
      autostepMaxHeight() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawkinematiccharactercontroller_autostepMaxHeight(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = K()[a / 4 + 1];
          return t === 0 ? void 0 : r;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      autostepMinWidth() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawkinematiccharactercontroller_autostepMinWidth(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = K()[a / 4 + 1];
          return t === 0 ? void 0 : r;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      autostepIncludesDynamicBodies() {
        const t =
          i.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(
            this.ptr
          );
        return t === 16777215 ? void 0 : t !== 0;
      }
      autostepEnabled() {
        return (
          i.rawkinematiccharactercontroller_autostepEnabled(this.ptr) !== 0
        );
      }
      enableAutostep(t, r, a) {
        i.rawkinematiccharactercontroller_enableAutostep(this.ptr, t, r, a);
      }
      disableAutostep() {
        i.rawkinematiccharactercontroller_disableAutostep(this.ptr);
      }
      maxSlopeClimbAngle() {
        return i.rawintegrationparameters_allowedLinearError(this.ptr);
      }
      setMaxSlopeClimbAngle(t) {
        i.rawintegrationparameters_set_allowedLinearError(this.ptr, t);
      }
      minSlopeSlideAngle() {
        return i.rawkinematiccharactercontroller_minSlopeSlideAngle(this.ptr);
      }
      setMinSlopeSlideAngle(t) {
        i.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.ptr, t);
      }
      snapToGroundDistance() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawkinematiccharactercontroller_snapToGroundDistance(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = K()[a / 4 + 1];
          return t === 0 ? void 0 : r;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
      enableSnapToGround(t) {
        i.rawkinematiccharactercontroller_enableSnapToGround(this.ptr, t);
      }
      disableSnapToGround() {
        i.rawkinematiccharactercontroller_disableSnapToGround(this.ptr);
      }
      snapToGroundEnabled() {
        return (
          i.rawkinematiccharactercontroller_snapToGroundEnabled(this.ptr) !== 0
        );
      }
      computeColliderMovement(t, r, a, n, s, c, _, h, p, u, b) {
        try {
          l(r, P),
            l(a, E),
            l(n, nt),
            l(c, w),
            i.rawkinematiccharactercontroller_computeColliderMovement(
              this.ptr,
              t,
              r.ptr,
              a.ptr,
              n.ptr,
              s,
              c.ptr,
              _,
              !m(h),
              m(h) ? 0 : h,
              p,
              !m(u),
              m(u) ? 0 : u,
              T(b)
            );
        } finally {
          S[A++] = void 0;
        }
      }
      computedMovement() {
        const t = i.rawkinematiccharactercontroller_computedMovement(this.ptr);
        return w.__wrap(t);
      }
      computedGrounded() {
        return (
          i.rawkinematiccharactercontroller_computedGrounded(this.ptr) !== 0
        );
      }
      numComputedCollisions() {
        return (
          i.rawkinematiccharactercontroller_numComputedCollisions(this.ptr) >>>
          0
        );
      }
      computedCollision(t, r) {
        return (
          l(r, at),
          i.rawkinematiccharactercontroller_computedCollision(
            this.ptr,
            t,
            r.ptr
          ) !== 0
        );
      }
    }
    class N {
      static __wrap(t) {
        const r = Object.create(N.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawmultibodyjointset_free(t);
      }
      jointType(t) {
        return i.rawmultibodyjointset_jointType(this.ptr, t) >>> 0;
      }
      jointFrameX1(t) {
        const r = i.rawmultibodyjointset_jointFrameX1(this.ptr, t);
        return g.__wrap(r);
      }
      jointFrameX2(t) {
        const r = i.rawmultibodyjointset_jointFrameX2(this.ptr, t);
        return g.__wrap(r);
      }
      jointAnchor1(t) {
        const r = i.rawmultibodyjointset_jointAnchor1(this.ptr, t);
        return w.__wrap(r);
      }
      jointAnchor2(t) {
        const r = i.rawmultibodyjointset_jointAnchor2(this.ptr, t);
        return w.__wrap(r);
      }
      jointContactsEnabled(t) {
        return i.rawmultibodyjointset_jointContactsEnabled(this.ptr, t) !== 0;
      }
      jointSetContactsEnabled(t, r) {
        i.rawmultibodyjointset_jointSetContactsEnabled(this.ptr, t, r);
      }
      jointLimitsEnabled(t, r) {
        return i.rawmultibodyjointset_jointLimitsEnabled(this.ptr, t, r) !== 0;
      }
      jointLimitsMin(t, r) {
        return i.rawmultibodyjointset_jointLimitsMin(this.ptr, t, r);
      }
      jointLimitsMax(t, r) {
        return i.rawmultibodyjointset_jointLimitsMax(this.ptr, t, r);
      }
      constructor() {
        const t = i.rawmultibodyjointset_new();
        return N.__wrap(t);
      }
      createJoint(t, r, a, n) {
        return (
          l(t, z), i.rawmultibodyjointset_createJoint(this.ptr, t.ptr, r, a, n)
        );
      }
      remove(t, r) {
        i.rawmultibodyjointset_remove(this.ptr, t, r);
      }
      contains(t) {
        return i.rawmultibodyjointset_contains(this.ptr, t) !== 0;
      }
      forEachJointHandle(t) {
        try {
          i.rawmultibodyjointset_forEachJointHandle(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
      forEachJointAttachedToRigidBody(t, r) {
        try {
          i.rawmultibodyjointset_forEachJointAttachedToRigidBody(
            this.ptr,
            t,
            T(r)
          );
        } finally {
          S[A++] = void 0;
        }
      }
    }
    class q {
      static __wrap(t) {
        const r = Object.create(q.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawnarrowphase_free(t);
      }
      constructor() {
        const t = i.rawnarrowphase_new();
        return q.__wrap(t);
      }
      contacts_with(t, r) {
        i.rawnarrowphase_contacts_with(this.ptr, t, x(r));
      }
      contact_pair(t, r) {
        const a = i.rawnarrowphase_contact_pair(this.ptr, t, r);
        return a === 0 ? void 0 : $t.__wrap(a);
      }
      intersections_with(t, r) {
        i.rawnarrowphase_intersections_with(this.ptr, t, x(r));
      }
      intersection_pair(t, r) {
        return i.rawnarrowphase_intersection_pair(this.ptr, t, r) !== 0;
      }
    }
    class St {
      static __wrap(t) {
        const r = Object.create(St.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawphysicspipeline_free(t);
      }
      constructor() {
        const t = i.rawphysicspipeline_new();
        return St.__wrap(t);
      }
      step(t, r, a, n, s, c, _, h, p, u) {
        l(t, w),
          l(r, O),
          l(a, G),
          l(n, W),
          l(s, q),
          l(c, P),
          l(_, E),
          l(h, L),
          l(p, N),
          l(u, Z),
          i.rawphysicspipeline_step(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s.ptr,
            c.ptr,
            _.ptr,
            h.ptr,
            p.ptr,
            u.ptr
          );
      }
      stepWithEvents(t, r, a, n, s, c, _, h, p, u, b, y, j, F) {
        l(t, w),
          l(r, O),
          l(a, G),
          l(n, W),
          l(s, q),
          l(c, P),
          l(_, E),
          l(h, L),
          l(p, N),
          l(u, Z),
          l(b, ot),
          i.rawphysicspipeline_stepWithEvents(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s.ptr,
            c.ptr,
            _.ptr,
            h.ptr,
            p.ptr,
            u.ptr,
            b.ptr,
            x(y),
            x(j),
            x(F)
          );
      }
    }
    class vt {
      static __wrap(t) {
        const r = Object.create(vt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawpointcolliderprojection_free(t);
      }
      colliderHandle() {
        return i.rawcontactforceevent_collider1(this.ptr);
      }
      point() {
        const t = i.rawcontactforceevent_total_force(this.ptr);
        return w.__wrap(t);
      }
      isInside() {
        return i.rawpointcolliderprojection_isInside(this.ptr) !== 0;
      }
      featureType() {
        return i.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
      }
      featureId() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawpointcolliderprojection_featureId(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = I()[a / 4 + 1];
          return t === 0 ? void 0 : r >>> 0;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class Rt {
      static __wrap(t) {
        const r = Object.create(Rt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawpointprojection_free(t);
      }
      point() {
        const t = i.rawkinematiccharactercontroller_up(this.ptr);
        return w.__wrap(t);
      }
      isInside() {
        return i.rawpointprojection_isInside(this.ptr) !== 0;
      }
    }
    class nt {
      static __wrap(t) {
        const r = Object.create(nt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawquerypipeline_free(t);
      }
      constructor() {
        const t = i.rawquerypipeline_new();
        return nt.__wrap(t);
      }
      update(t, r) {
        l(t, P), l(r, E), i.rawquerypipeline_update(this.ptr, t.ptr, r.ptr);
      }
      castRay(t, r, a, n, s, c, _, h, p, u, b) {
        try {
          l(t, P), l(r, E), l(a, w), l(n, w);
          const y = i.rawquerypipeline_castRay(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s,
            c,
            _,
            !m(h),
            m(h) ? 0 : h,
            !m(p),
            m(p) ? 0 : p,
            !m(u),
            m(u) ? 0 : u,
            T(b)
          );
          return y === 0 ? void 0 : te.__wrap(y);
        } finally {
          S[A++] = void 0;
        }
      }
      castRayAndGetNormal(t, r, a, n, s, c, _, h, p, u, b) {
        try {
          l(t, P), l(r, E), l(a, w), l(n, w);
          const y = i.rawquerypipeline_castRayAndGetNormal(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s,
            c,
            _,
            !m(h),
            m(h) ? 0 : h,
            !m(p),
            m(p) ? 0 : p,
            !m(u),
            m(u) ? 0 : u,
            T(b)
          );
          return y === 0 ? void 0 : Ct.__wrap(y);
        } finally {
          S[A++] = void 0;
        }
      }
      intersectionsWithRay(t, r, a, n, s, c, _, h, p, u, b, y) {
        try {
          l(t, P),
            l(r, E),
            l(a, w),
            l(n, w),
            i.rawquerypipeline_intersectionsWithRay(
              this.ptr,
              t.ptr,
              r.ptr,
              a.ptr,
              n.ptr,
              s,
              c,
              T(_),
              h,
              !m(p),
              m(p) ? 0 : p,
              !m(u),
              m(u) ? 0 : u,
              !m(b),
              m(b) ? 0 : b,
              T(y)
            );
        } finally {
          (S[A++] = void 0), (S[A++] = void 0);
        }
      }
      intersectionWithShape(t, r, a, n, s, c, _, h, p, u) {
        try {
          const j = i.__wbindgen_add_to_stack_pointer(-16);
          l(t, P),
            l(r, E),
            l(a, w),
            l(n, g),
            l(s, f),
            i.rawquerypipeline_intersectionWithShape(
              j,
              this.ptr,
              t.ptr,
              r.ptr,
              a.ptr,
              n.ptr,
              s.ptr,
              c,
              !m(_),
              m(_) ? 0 : _,
              !m(h),
              m(h) ? 0 : h,
              !m(p),
              m(p) ? 0 : p,
              T(u)
            );
          var b = I()[j / 4 + 0],
            y = Xt()[j / 8 + 1];
          return b === 0 ? void 0 : y;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16), (S[A++] = void 0);
        }
      }
      projectPoint(t, r, a, n, s, c, _, h, p) {
        try {
          l(t, P), l(r, E), l(a, w);
          const u = i.rawquerypipeline_projectPoint(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n,
            s,
            !m(c),
            m(c) ? 0 : c,
            !m(_),
            m(_) ? 0 : _,
            !m(h),
            m(h) ? 0 : h,
            T(p)
          );
          return u === 0 ? void 0 : vt.__wrap(u);
        } finally {
          S[A++] = void 0;
        }
      }
      projectPointAndGetFeature(t, r, a, n, s, c, _, h) {
        try {
          l(t, P), l(r, E), l(a, w);
          const p = i.rawquerypipeline_projectPointAndGetFeature(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n,
            !m(s),
            m(s) ? 0 : s,
            !m(c),
            m(c) ? 0 : c,
            !m(_),
            m(_) ? 0 : _,
            T(h)
          );
          return p === 0 ? void 0 : vt.__wrap(p);
        } finally {
          S[A++] = void 0;
        }
      }
      intersectionsWithPoint(t, r, a, n, s, c, _, h, p) {
        try {
          l(t, P),
            l(r, E),
            l(a, w),
            i.rawquerypipeline_intersectionsWithPoint(
              this.ptr,
              t.ptr,
              r.ptr,
              a.ptr,
              T(n),
              s,
              !m(c),
              m(c) ? 0 : c,
              !m(_),
              m(_) ? 0 : _,
              !m(h),
              m(h) ? 0 : h,
              T(p)
            );
        } finally {
          (S[A++] = void 0), (S[A++] = void 0);
        }
      }
      castShape(t, r, a, n, s, c, _, h, p, u, b, y, j) {
        try {
          l(t, P), l(r, E), l(a, w), l(n, g), l(s, w), l(c, f);
          const F = i.rawquerypipeline_castShape(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s.ptr,
            c.ptr,
            _,
            h,
            p,
            !m(u),
            m(u) ? 0 : u,
            !m(b),
            m(b) ? 0 : b,
            !m(y),
            m(y) ? 0 : y,
            T(j)
          );
          return F === 0 ? void 0 : It.__wrap(F);
        } finally {
          S[A++] = void 0;
        }
      }
      intersectionsWithShape(t, r, a, n, s, c, _, h, p, u, b) {
        try {
          l(t, P),
            l(r, E),
            l(a, w),
            l(n, g),
            l(s, f),
            i.rawquerypipeline_intersectionsWithShape(
              this.ptr,
              t.ptr,
              r.ptr,
              a.ptr,
              n.ptr,
              s.ptr,
              T(c),
              _,
              !m(h),
              m(h) ? 0 : h,
              !m(p),
              m(p) ? 0 : p,
              !m(u),
              m(u) ? 0 : u,
              T(b)
            );
        } finally {
          (S[A++] = void 0), (S[A++] = void 0);
        }
      }
      collidersWithAabbIntersectingAabb(t, r, a) {
        try {
          l(t, w),
            l(r, w),
            i.rawquerypipeline_collidersWithAabbIntersectingAabb(
              this.ptr,
              t.ptr,
              r.ptr,
              T(a)
            );
        } finally {
          S[A++] = void 0;
        }
      }
    }
    class Ct {
      static __wrap(t) {
        const r = Object.create(Ct.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawraycolliderintersection_free(t);
      }
      colliderHandle() {
        return i.rawcontactforceevent_collider1(this.ptr);
      }
      normal() {
        const t = i.rawraycolliderintersection_normal(this.ptr);
        return w.__wrap(t);
      }
      toi() {
        return i.rawintegrationparameters_allowedLinearError(this.ptr);
      }
      featureType() {
        return i.rawraycolliderintersection_featureType(this.ptr) >>> 0;
      }
      featureId() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawraycolliderintersection_featureId(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = I()[a / 4 + 1];
          return t === 0 ? void 0 : r >>> 0;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class te {
      static __wrap(t) {
        const r = Object.create(te.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawraycollidertoi_free(t);
      }
      colliderHandle() {
        return i.rawcontactforceevent_collider1(this.ptr);
      }
      toi() {
        return i.rawintegrationparameters_erp(this.ptr);
      }
    }
    class At {
      static __wrap(t) {
        const r = Object.create(At.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawrayintersection_free(t);
      }
      normal() {
        const t = i.rawkinematiccharactercontroller_up(this.ptr);
        return w.__wrap(t);
      }
      toi() {
        return i.rawrayintersection_toi(this.ptr);
      }
      featureType() {
        return i.rawpointcolliderprojection_featureType(this.ptr) >>> 0;
      }
      featureId() {
        try {
          const a = i.__wbindgen_add_to_stack_pointer(-16);
          i.rawpointcolliderprojection_featureId(a, this.ptr);
          var t = I()[a / 4 + 0],
            r = I()[a / 4 + 1];
          return t === 0 ? void 0 : r >>> 0;
        } finally {
          i.__wbindgen_add_to_stack_pointer(16);
        }
      }
    }
    class P {
      static __wrap(t) {
        const r = Object.create(P.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawrigidbodyset_free(t);
      }
      rbTranslation(t) {
        const r = i.rawrigidbodyset_rbTranslation(this.ptr, t);
        return w.__wrap(r);
      }
      rbRotation(t) {
        const r = i.rawrigidbodyset_rbRotation(this.ptr, t);
        return g.__wrap(r);
      }
      rbSleep(t) {
        i.rawrigidbodyset_rbSleep(this.ptr, t);
      }
      rbIsSleeping(t) {
        return i.rawrigidbodyset_rbIsSleeping(this.ptr, t) !== 0;
      }
      rbIsMoving(t) {
        return i.rawrigidbodyset_rbIsMoving(this.ptr, t) !== 0;
      }
      rbNextTranslation(t) {
        const r = i.rawrigidbodyset_rbNextTranslation(this.ptr, t);
        return w.__wrap(r);
      }
      rbNextRotation(t) {
        const r = i.rawrigidbodyset_rbNextRotation(this.ptr, t);
        return g.__wrap(r);
      }
      rbSetTranslation(t, r, a, n) {
        i.rawrigidbodyset_rbSetTranslation(this.ptr, t, r, a, n);
      }
      rbSetRotation(t, r, a) {
        i.rawrigidbodyset_rbSetRotation(this.ptr, t, r, a);
      }
      rbSetLinvel(t, r, a) {
        l(r, w), i.rawrigidbodyset_rbSetLinvel(this.ptr, t, r.ptr, a);
      }
      rbSetAngvel(t, r, a) {
        i.rawrigidbodyset_rbSetAngvel(this.ptr, t, r, a);
      }
      rbSetNextKinematicTranslation(t, r, a) {
        i.rawrigidbodyset_rbSetNextKinematicTranslation(this.ptr, t, r, a);
      }
      rbSetNextKinematicRotation(t, r) {
        i.rawrigidbodyset_rbSetNextKinematicRotation(this.ptr, t, r);
      }
      rbRecomputeMassPropertiesFromColliders(t, r) {
        l(r, E),
          i.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(
            this.ptr,
            t,
            r.ptr
          );
      }
      rbSetAdditionalMass(t, r, a) {
        i.rawrigidbodyset_rbSetAdditionalMass(this.ptr, t, r, a);
      }
      rbSetAdditionalMassProperties(t, r, a, n, s) {
        l(a, w),
          i.rawrigidbodyset_rbSetAdditionalMassProperties(
            this.ptr,
            t,
            r,
            a.ptr,
            n,
            s
          );
      }
      rbLinvel(t) {
        const r = i.rawrigidbodyset_rbLinvel(this.ptr, t);
        return w.__wrap(r);
      }
      rbAngvel(t) {
        return i.rawrigidbodyset_rbAngvel(this.ptr, t);
      }
      rbLockTranslations(t, r, a) {
        i.rawrigidbodyset_rbLockTranslations(this.ptr, t, r, a);
      }
      rbSetEnabledTranslations(t, r, a, n) {
        i.rawrigidbodyset_rbSetEnabledTranslations(this.ptr, t, r, a, n);
      }
      rbLockRotations(t, r, a) {
        i.rawrigidbodyset_rbLockRotations(this.ptr, t, r, a);
      }
      rbDominanceGroup(t) {
        return i.rawrigidbodyset_rbDominanceGroup(this.ptr, t);
      }
      rbSetDominanceGroup(t, r) {
        i.rawrigidbodyset_rbSetDominanceGroup(this.ptr, t, r);
      }
      rbEnableCcd(t, r) {
        i.rawrigidbodyset_rbEnableCcd(this.ptr, t, r);
      }
      rbMass(t) {
        return i.rawrigidbodyset_rbMass(this.ptr, t);
      }
      rbInvMass(t) {
        return i.rawrigidbodyset_rbInvMass(this.ptr, t);
      }
      rbEffectiveInvMass(t) {
        const r = i.rawrigidbodyset_rbEffectiveInvMass(this.ptr, t);
        return w.__wrap(r);
      }
      rbLocalCom(t) {
        const r = i.rawrigidbodyset_rbLocalCom(this.ptr, t);
        return w.__wrap(r);
      }
      rbWorldCom(t) {
        const r = i.rawrigidbodyset_rbWorldCom(this.ptr, t);
        return w.__wrap(r);
      }
      rbInvPrincipalInertiaSqrt(t) {
        return i.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.ptr, t);
      }
      rbPrincipalInertia(t) {
        return i.rawrigidbodyset_rbPrincipalInertia(this.ptr, t);
      }
      rbEffectiveWorldInvInertiaSqrt(t) {
        return i.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.ptr, t);
      }
      rbEffectiveAngularInertia(t) {
        return i.rawrigidbodyset_rbEffectiveAngularInertia(this.ptr, t);
      }
      rbWakeUp(t) {
        i.rawrigidbodyset_rbWakeUp(this.ptr, t);
      }
      rbIsCcdEnabled(t) {
        return i.rawrigidbodyset_rbIsCcdEnabled(this.ptr, t) !== 0;
      }
      rbNumColliders(t) {
        return i.rawrigidbodyset_rbNumColliders(this.ptr, t) >>> 0;
      }
      rbCollider(t, r) {
        return i.rawrigidbodyset_rbCollider(this.ptr, t, r);
      }
      rbBodyType(t) {
        return i.rawrigidbodyset_rbBodyType(this.ptr, t) >>> 0;
      }
      rbSetBodyType(t, r, a) {
        i.rawrigidbodyset_rbSetBodyType(this.ptr, t, r, a);
      }
      rbIsFixed(t) {
        return i.rawrigidbodyset_rbIsFixed(this.ptr, t) !== 0;
      }
      rbIsKinematic(t) {
        return i.rawrigidbodyset_rbIsKinematic(this.ptr, t) !== 0;
      }
      rbIsDynamic(t) {
        return i.rawrigidbodyset_rbIsDynamic(this.ptr, t) !== 0;
      }
      rbLinearDamping(t) {
        return i.rawrigidbodyset_rbLinearDamping(this.ptr, t);
      }
      rbAngularDamping(t) {
        return i.rawrigidbodyset_rbAngularDamping(this.ptr, t);
      }
      rbSetLinearDamping(t, r) {
        i.rawrigidbodyset_rbSetLinearDamping(this.ptr, t, r);
      }
      rbSetAngularDamping(t, r) {
        i.rawrigidbodyset_rbSetAngularDamping(this.ptr, t, r);
      }
      rbSetEnabled(t, r) {
        i.rawrigidbodyset_rbSetEnabled(this.ptr, t, r);
      }
      rbIsEnabled(t) {
        return i.rawrigidbodyset_rbIsEnabled(this.ptr, t) !== 0;
      }
      rbGravityScale(t) {
        return i.rawrigidbodyset_rbGravityScale(this.ptr, t);
      }
      rbSetGravityScale(t, r, a) {
        i.rawrigidbodyset_rbSetGravityScale(this.ptr, t, r, a);
      }
      rbResetForces(t, r) {
        i.rawrigidbodyset_rbResetForces(this.ptr, t, r);
      }
      rbResetTorques(t, r) {
        i.rawrigidbodyset_rbResetTorques(this.ptr, t, r);
      }
      rbAddForce(t, r, a) {
        l(r, w), i.rawrigidbodyset_rbAddForce(this.ptr, t, r.ptr, a);
      }
      rbApplyImpulse(t, r, a) {
        l(r, w), i.rawrigidbodyset_rbApplyImpulse(this.ptr, t, r.ptr, a);
      }
      rbAddTorque(t, r, a) {
        i.rawrigidbodyset_rbAddTorque(this.ptr, t, r, a);
      }
      rbApplyTorqueImpulse(t, r, a) {
        i.rawrigidbodyset_rbApplyTorqueImpulse(this.ptr, t, r, a);
      }
      rbAddForceAtPoint(t, r, a, n) {
        l(r, w),
          l(a, w),
          i.rawrigidbodyset_rbAddForceAtPoint(this.ptr, t, r.ptr, a.ptr, n);
      }
      rbApplyImpulseAtPoint(t, r, a, n) {
        l(r, w),
          l(a, w),
          i.rawrigidbodyset_rbApplyImpulseAtPoint(this.ptr, t, r.ptr, a.ptr, n);
      }
      rbUserData(t) {
        return i.rawrigidbodyset_rbUserData(this.ptr, t) >>> 0;
      }
      rbSetUserData(t, r) {
        i.rawrigidbodyset_rbSetUserData(this.ptr, t, r);
      }
      constructor() {
        const t = i.rawrigidbodyset_new();
        return P.__wrap(t);
      }
      createRigidBody(
        t,
        r,
        a,
        n,
        s,
        c,
        _,
        h,
        p,
        u,
        b,
        y,
        j,
        F,
        V,
        U,
        tt,
        Be,
        ze,
        Le
      ) {
        return (
          l(r, w),
          l(a, g),
          l(_, w),
          l(h, w),
          i.rawrigidbodyset_createRigidBody(
            this.ptr,
            t,
            r.ptr,
            a.ptr,
            n,
            s,
            c,
            _.ptr,
            h.ptr,
            p,
            u,
            b,
            y,
            j,
            F,
            V,
            U,
            tt,
            Be,
            ze,
            Le
          )
        );
      }
      remove(t, r, a, n, s) {
        l(r, G),
          l(a, E),
          l(n, L),
          l(s, N),
          i.rawrigidbodyset_remove(this.ptr, t, r.ptr, a.ptr, n.ptr, s.ptr);
      }
      len() {
        return i.rawrigidbodyset_len(this.ptr) >>> 0;
      }
      contains(t) {
        return i.rawrigidbodyset_contains(this.ptr, t) !== 0;
      }
      forEachRigidBodyHandle(t) {
        try {
          i.rawrigidbodyset_forEachRigidBodyHandle(this.ptr, T(t));
        } finally {
          S[A++] = void 0;
        }
      }
      propagateModifiedBodyPositionsToColliders(t) {
        l(t, E),
          i.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(
            this.ptr,
            t.ptr
          );
      }
    }
    class g {
      static __wrap(t) {
        const r = Object.create(g.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawrotation_free(t);
      }
      static identity() {
        const t = i.rawrotation_identity();
        return g.__wrap(t);
      }
      static fromAngle(t) {
        const r = i.rawrotation_fromAngle(t);
        return g.__wrap(r);
      }
      get im() {
        return i.rawrotation_im(this.ptr);
      }
      get re() {
        return i.rawintegrationparameters_dt(this.ptr);
      }
      get angle() {
        return i.rawrotation_angle(this.ptr);
      }
    }
    class jt {
      static __wrap(t) {
        const r = Object.create(jt.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawserializationpipeline_free(t);
      }
      constructor() {
        const t = i.rawserializationpipeline_new();
        return jt.__wrap(t);
      }
      serializeAll(t, r, a, n, s, c, _, h, p) {
        l(t, w),
          l(r, O),
          l(a, G),
          l(n, W),
          l(s, q),
          l(c, P),
          l(_, E),
          l(h, L),
          l(p, N);
        const u = i.rawserializationpipeline_serializeAll(
          this.ptr,
          t.ptr,
          r.ptr,
          a.ptr,
          n.ptr,
          s.ptr,
          c.ptr,
          _.ptr,
          h.ptr,
          p.ptr
        );
        return Kt(u);
      }
      deserializeAll(t) {
        const r = i.rawserializationpipeline_deserializeAll(this.ptr, x(t));
        return r === 0 ? void 0 : Zt.__wrap(r);
      }
    }
    class f {
      static __wrap(t) {
        const r = Object.create(f.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawshape_free(t);
      }
      static cuboid(t, r) {
        const a = i.rawshape_cuboid(t, r);
        return f.__wrap(a);
      }
      static roundCuboid(t, r, a) {
        const n = i.rawshape_roundCuboid(t, r, a);
        return f.__wrap(n);
      }
      static ball(t) {
        const r = i.rawshape_ball(t);
        return f.__wrap(r);
      }
      static halfspace(t) {
        l(t, w);
        const r = i.rawshape_halfspace(t.ptr);
        return f.__wrap(r);
      }
      static capsule(t, r) {
        const a = i.rawshape_capsule(t, r);
        return f.__wrap(a);
      }
      static polyline(t, r) {
        const a = $(t, i.__wbindgen_malloc),
          n = B,
          s = Ye(r, i.__wbindgen_malloc),
          c = B,
          _ = i.rawshape_polyline(a, n, s, c);
        return f.__wrap(_);
      }
      static trimesh(t, r) {
        const a = $(t, i.__wbindgen_malloc),
          n = B,
          s = Ye(r, i.__wbindgen_malloc),
          c = B,
          _ = i.rawshape_trimesh(a, n, s, c);
        return f.__wrap(_);
      }
      static heightfield(t, r) {
        const a = $(t, i.__wbindgen_malloc),
          n = B;
        l(r, w);
        const s = i.rawshape_heightfield(a, n, r.ptr);
        return f.__wrap(s);
      }
      static segment(t, r) {
        l(t, w), l(r, w);
        const a = i.rawshape_segment(t.ptr, r.ptr);
        return f.__wrap(a);
      }
      static triangle(t, r, a) {
        l(t, w), l(r, w), l(a, w);
        const n = i.rawshape_triangle(t.ptr, r.ptr, a.ptr);
        return f.__wrap(n);
      }
      static roundTriangle(t, r, a, n) {
        l(t, w), l(r, w), l(a, w);
        const s = i.rawshape_roundTriangle(t.ptr, r.ptr, a.ptr, n);
        return f.__wrap(s);
      }
      static convexHull(t) {
        const r = $(t, i.__wbindgen_malloc),
          a = B,
          n = i.rawshape_convexHull(r, a);
        return n === 0 ? void 0 : f.__wrap(n);
      }
      static roundConvexHull(t, r) {
        const a = $(t, i.__wbindgen_malloc),
          n = B,
          s = i.rawshape_roundConvexHull(a, n, r);
        return s === 0 ? void 0 : f.__wrap(s);
      }
      static convexPolyline(t) {
        const r = $(t, i.__wbindgen_malloc),
          a = B,
          n = i.rawshape_convexPolyline(r, a);
        return n === 0 ? void 0 : f.__wrap(n);
      }
      static roundConvexPolyline(t, r) {
        const a = $(t, i.__wbindgen_malloc),
          n = B,
          s = i.rawshape_roundConvexPolyline(a, n, r);
        return s === 0 ? void 0 : f.__wrap(s);
      }
      castShape(t, r, a, n, s, c, _, h, p) {
        l(t, w), l(r, g), l(a, w), l(n, f), l(s, w), l(c, g), l(_, w);
        const u = i.rawshape_castShape(
          this.ptr,
          t.ptr,
          r.ptr,
          a.ptr,
          n.ptr,
          s.ptr,
          c.ptr,
          _.ptr,
          h,
          p
        );
        return u === 0 ? void 0 : Et.__wrap(u);
      }
      intersectsShape(t, r, a, n, s) {
        return (
          l(t, w),
          l(r, g),
          l(a, f),
          l(n, w),
          l(s, g),
          i.rawshape_intersectsShape(
            this.ptr,
            t.ptr,
            r.ptr,
            a.ptr,
            n.ptr,
            s.ptr
          ) !== 0
        );
      }
      contactShape(t, r, a, n, s, c) {
        l(t, w), l(r, g), l(a, f), l(n, w), l(s, g);
        const _ = i.rawshape_contactShape(
          this.ptr,
          t.ptr,
          r.ptr,
          a.ptr,
          n.ptr,
          s.ptr,
          c
        );
        return _ === 0 ? void 0 : st.__wrap(_);
      }
      containsPoint(t, r, a) {
        return (
          l(t, w),
          l(r, g),
          l(a, w),
          i.rawshape_containsPoint(this.ptr, t.ptr, r.ptr, a.ptr) !== 0
        );
      }
      projectPoint(t, r, a, n) {
        l(t, w), l(r, g), l(a, w);
        const s = i.rawshape_projectPoint(this.ptr, t.ptr, r.ptr, a.ptr, n);
        return Rt.__wrap(s);
      }
      intersectsRay(t, r, a, n, s) {
        return (
          l(t, w),
          l(r, g),
          l(a, w),
          l(n, w),
          i.rawshape_intersectsRay(this.ptr, t.ptr, r.ptr, a.ptr, n.ptr, s) !==
            0
        );
      }
      castRay(t, r, a, n, s, c) {
        return (
          l(t, w),
          l(r, g),
          l(a, w),
          l(n, w),
          i.rawshape_castRay(this.ptr, t.ptr, r.ptr, a.ptr, n.ptr, s, c)
        );
      }
      castRayAndGetNormal(t, r, a, n, s, c) {
        l(t, w), l(r, g), l(a, w), l(n, w);
        const _ = i.rawshape_castRayAndGetNormal(
          this.ptr,
          t.ptr,
          r.ptr,
          a.ptr,
          n.ptr,
          s,
          c
        );
        return _ === 0 ? void 0 : At.__wrap(_);
      }
    }
    class It {
      static __wrap(t) {
        const r = Object.create(It.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawshapecollidertoi_free(t);
      }
      colliderHandle() {
        return i.rawcontactforceevent_collider1(this.ptr);
      }
      toi() {
        return i.rawshapecollidertoi_toi(this.ptr);
      }
      witness1() {
        const t = i.rawraycolliderintersection_normal(this.ptr);
        return w.__wrap(t);
      }
      witness2() {
        const t = i.rawcontactforceevent_total_force(this.ptr);
        return w.__wrap(t);
      }
      normal1() {
        const t = i.rawcharactercollision_translationApplied(this.ptr);
        return w.__wrap(t);
      }
      normal2() {
        const t = i.rawcharactercollision_translationRemaining(this.ptr);
        return w.__wrap(t);
      }
    }
    class st {
      static __wrap(t) {
        const r = Object.create(st.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawshapecontact_free(t);
      }
      distance() {
        return i.rawcontactforceevent_total_force_magnitude(this.ptr);
      }
      point1() {
        const t = i.rawkinematiccharactercontroller_up(this.ptr);
        return w.__wrap(t);
      }
      point2() {
        const t = i.rawraycolliderintersection_normal(this.ptr);
        return w.__wrap(t);
      }
      normal1() {
        const t = i.rawcontactforceevent_total_force(this.ptr);
        return w.__wrap(t);
      }
      normal2() {
        const t = i.rawcharactercollision_translationApplied(this.ptr);
        return w.__wrap(t);
      }
    }
    class Et {
      static __wrap(t) {
        const r = Object.create(Et.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawshapetoi_free(t);
      }
      toi() {
        return i.rawcontactforceevent_total_force_magnitude(this.ptr);
      }
      witness1() {
        const t = i.rawkinematiccharactercontroller_up(this.ptr);
        return w.__wrap(t);
      }
      witness2() {
        const t = i.rawraycolliderintersection_normal(this.ptr);
        return w.__wrap(t);
      }
      normal1() {
        const t = i.rawcontactforceevent_total_force(this.ptr);
        return w.__wrap(t);
      }
      normal2() {
        const t = i.rawcharactercollision_translationApplied(this.ptr);
        return w.__wrap(t);
      }
    }
    class w {
      static __wrap(t) {
        const r = Object.create(w.prototype);
        return (r.ptr = t), r;
      }
      __destroy_into_raw() {
        const t = this.ptr;
        return (this.ptr = 0), t;
      }
      free() {
        const t = this.__destroy_into_raw();
        i.__wbg_rawvector_free(t);
      }
      static zero() {
        const t = i.rawvector_zero();
        return w.__wrap(t);
      }
      constructor(t, r) {
        const a = i.rawvector_new(t, r);
        return w.__wrap(a);
      }
      get x() {
        return i.rawintegrationparameters_dt(this.ptr);
      }
      set x(t) {
        i.rawintegrationparameters_set_dt(this.ptr, t);
      }
      get y() {
        return i.rawrotation_im(this.ptr);
      }
      set y(t) {
        i.rawvector_set_y(this.ptr, t);
      }
      xy() {
        const t = i.rawvector_xy(this.ptr);
        return w.__wrap(t);
      }
      yx() {
        const t = i.rawvector_yx(this.ptr);
        return w.__wrap(t);
      }
    }
    function Qe(e) {
      Kt(e);
    }
    function $e(e) {
      return x(e);
    }
    function Ze(e, t) {
      const r = v(t),
        a = typeof r == "number" ? r : void 0;
      (Xt()[e / 8 + 1] = m(a) ? 0 : a), (I()[e / 4 + 0] = !m(a));
    }
    function tr(e) {
      const t = v(e);
      return typeof t == "boolean" ? (t ? 1 : 0) : 2;
    }
    function er(e) {
      return typeof v(e) == "function";
    }
    function rr(e) {
      const t = Ct.__wrap(e);
      return x(t);
    }
    function ir(e) {
      const t = Yt.__wrap(e);
      return x(t);
    }
    function ar() {
      return He(function (e, t, r) {
        const a = v(e).call(v(t), v(r));
        return x(a);
      }, arguments);
    }
    function or() {
      return He(function (e, t, r, a) {
        const n = v(e).call(v(t), v(r), v(a));
        return x(n);
      }, arguments);
    }
    function nr() {
      return He(function (e, t, r, a, n) {
        const s = v(e).call(v(t), v(r), v(a), v(n));
        return x(s);
      }, arguments);
    }
    function sr(e, t, r, a) {
      const n = v(e).bind(v(t), v(r), v(a));
      return x(n);
    }
    function lr(e) {
      const t = v(e).buffer;
      return x(t);
    }
    function cr(e, t, r) {
      const a = new Uint8Array(v(e), t >>> 0, r >>> 0);
      return x(a);
    }
    function dr(e) {
      const t = new Uint8Array(v(e));
      return x(t);
    }
    function _r(e, t, r) {
      v(e).set(v(t), r >>> 0);
    }
    function wr(e) {
      return v(e).length;
    }
    function hr(e, t, r) {
      const a = new Float32Array(v(e), t >>> 0, r >>> 0);
      return x(a);
    }
    function pr(e, t, r) {
      v(e).set(v(t), r >>> 0);
    }
    function ur(e) {
      return v(e).length;
    }
    function br(e) {
      const t = new Float32Array(e >>> 0);
      return x(t);
    }
    function mr(e, t) {
      throw new Error(Ve(e, t));
    }
    function yr() {
      const e = i.memory;
      return x(e);
    }
    (Pe = class {
      constructor(e, t) {
        (this.x = e), (this.y = t);
      }
    }),
      (d = class {
        static new(e, t) {
          return new Pe(e, t);
        }
        static zeros() {
          return d.new(0, 0);
        }
        static fromRaw(e) {
          if (!e) return null;
          let t = d.new(e.x, e.y);
          return e.free(), t;
        }
        static intoRaw(e) {
          return new w(e.x, e.y);
        }
        static copy(e, t) {
          (e.x = t.x), (e.y = t.y);
        }
      }),
      (C = class {
        static identity() {
          return 0;
        }
        static fromRaw(e) {
          if (!e) return null;
          let t = e.angle;
          return e.free(), t;
        }
        static intoRaw(e) {
          return g.fromAngle(e);
        }
      }),
      (function (e) {
        (e[(e.Dynamic = 0)] = "Dynamic"),
          (e[(e.Fixed = 1)] = "Fixed"),
          (e[(e.KinematicPositionBased = 2)] = "KinematicPositionBased"),
          (e[(e.KinematicVelocityBased = 3)] = "KinematicVelocityBased");
      })(H || (H = {})),
      (zt = class {
        constructor(e, t, r) {
          (this.rawSet = e), (this.colliderSet = t), (this.handle = r);
        }
        finalizeDeserialization(e) {
          this.colliderSet = e;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        lockTranslations(e, t) {
          return this.rawSet.rbLockTranslations(this.handle, e, t);
        }
        lockRotations(e, t) {
          return this.rawSet.rbLockRotations(this.handle, e, t);
        }
        setEnabledTranslations(e, t, r) {
          return this.rawSet.rbSetEnabledTranslations(this.handle, e, t, r);
        }
        restrictTranslations(e, t, r) {
          this.setEnabledTranslations(e, e, r);
        }
        dominanceGroup() {
          return this.rawSet.rbDominanceGroup(this.handle);
        }
        setDominanceGroup(e) {
          this.rawSet.rbSetDominanceGroup(this.handle, e);
        }
        enableCcd(e) {
          this.rawSet.rbEnableCcd(this.handle, e);
        }
        translation() {
          let e = this.rawSet.rbTranslation(this.handle);
          return d.fromRaw(e);
        }
        rotation() {
          let e = this.rawSet.rbRotation(this.handle);
          return C.fromRaw(e);
        }
        nextTranslation() {
          let e = this.rawSet.rbNextTranslation(this.handle);
          return d.fromRaw(e);
        }
        nextRotation() {
          let e = this.rawSet.rbNextRotation(this.handle);
          return C.fromRaw(e);
        }
        setTranslation(e, t) {
          this.rawSet.rbSetTranslation(this.handle, e.x, e.y, t);
        }
        setLinvel(e, t) {
          let r = d.intoRaw(e);
          this.rawSet.rbSetLinvel(this.handle, r, t), r.free();
        }
        gravityScale() {
          return this.rawSet.rbGravityScale(this.handle);
        }
        setGravityScale(e, t) {
          this.rawSet.rbSetGravityScale(this.handle, e, t);
        }
        setRotation(e, t) {
          this.rawSet.rbSetRotation(this.handle, e, t);
        }
        setAngvel(e, t) {
          this.rawSet.rbSetAngvel(this.handle, e, t);
        }
        setNextKinematicTranslation(e) {
          this.rawSet.rbSetNextKinematicTranslation(this.handle, e.x, e.y);
        }
        setNextKinematicRotation(e) {
          this.rawSet.rbSetNextKinematicRotation(this.handle, e);
        }
        linvel() {
          return d.fromRaw(this.rawSet.rbLinvel(this.handle));
        }
        angvel() {
          return this.rawSet.rbAngvel(this.handle);
        }
        mass() {
          return this.rawSet.rbMass(this.handle);
        }
        effectiveInvMass() {
          return d.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
        }
        invMass() {
          return this.rawSet.rbInvMass(this.handle);
        }
        localCom() {
          return d.fromRaw(this.rawSet.rbLocalCom(this.handle));
        }
        worldCom() {
          return d.fromRaw(this.rawSet.rbWorldCom(this.handle));
        }
        invPrincipalInertiaSqrt() {
          return this.rawSet.rbInvPrincipalInertiaSqrt(this.handle);
        }
        principalInertia() {
          return this.rawSet.rbPrincipalInertia(this.handle);
        }
        effectiveWorldInvInertiaSqrt() {
          return this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle);
        }
        effectiveAngularInertia() {
          return this.rawSet.rbEffectiveAngularInertia(this.handle);
        }
        sleep() {
          this.rawSet.rbSleep(this.handle);
        }
        wakeUp() {
          this.rawSet.rbWakeUp(this.handle);
        }
        isCcdEnabled() {
          return this.rawSet.rbIsCcdEnabled(this.handle);
        }
        numColliders() {
          return this.rawSet.rbNumColliders(this.handle);
        }
        collider(e) {
          return this.colliderSet.get(this.rawSet.rbCollider(this.handle, e));
        }
        setEnabled(e) {
          this.rawSet.rbSetEnabled(this.handle, e);
        }
        isEnabled() {
          return this.rawSet.rbIsEnabled(this.handle);
        }
        bodyType() {
          return this.rawSet.rbBodyType(this.handle);
        }
        setBodyType(e, t) {
          return this.rawSet.rbSetBodyType(this.handle, e, t);
        }
        isSleeping() {
          return this.rawSet.rbIsSleeping(this.handle);
        }
        isMoving() {
          return this.rawSet.rbIsMoving(this.handle);
        }
        isFixed() {
          return this.rawSet.rbIsFixed(this.handle);
        }
        isKinematic() {
          return this.rawSet.rbIsKinematic(this.handle);
        }
        isDynamic() {
          return this.rawSet.rbIsDynamic(this.handle);
        }
        linearDamping() {
          return this.rawSet.rbLinearDamping(this.handle);
        }
        angularDamping() {
          return this.rawSet.rbAngularDamping(this.handle);
        }
        setLinearDamping(e) {
          this.rawSet.rbSetLinearDamping(this.handle, e);
        }
        recomputeMassPropertiesFromColliders() {
          this.rawSet.rbRecomputeMassPropertiesFromColliders(
            this.handle,
            this.colliderSet.raw
          );
        }
        setAdditionalMass(e, t) {
          this.rawSet.rbSetAdditionalMass(this.handle, e, t);
        }
        setAdditionalMassProperties(e, t, r, a) {
          let n = d.intoRaw(t);
          this.rawSet.rbSetAdditionalMassProperties(this.handle, e, n, r, a),
            n.free();
        }
        setAngularDamping(e) {
          this.rawSet.rbSetAngularDamping(this.handle, e);
        }
        resetForces(e) {
          this.rawSet.rbResetForces(this.handle, e);
        }
        resetTorques(e) {
          this.rawSet.rbResetTorques(this.handle, e);
        }
        addForce(e, t) {
          const r = d.intoRaw(e);
          this.rawSet.rbAddForce(this.handle, r, t), r.free();
        }
        applyImpulse(e, t) {
          const r = d.intoRaw(e);
          this.rawSet.rbApplyImpulse(this.handle, r, t), r.free();
        }
        addTorque(e, t) {
          this.rawSet.rbAddTorque(this.handle, e, t);
        }
        applyTorqueImpulse(e, t) {
          this.rawSet.rbApplyTorqueImpulse(this.handle, e, t);
        }
        addForceAtPoint(e, t, r) {
          const a = d.intoRaw(e),
            n = d.intoRaw(t);
          this.rawSet.rbAddForceAtPoint(this.handle, a, n, r),
            a.free(),
            n.free();
        }
        applyImpulseAtPoint(e, t, r) {
          const a = d.intoRaw(e),
            n = d.intoRaw(t);
          this.rawSet.rbApplyImpulseAtPoint(this.handle, a, n, r),
            a.free(),
            n.free();
        }
      }),
      (J = class {
        constructor(e) {
          (this.enabled = !0),
            (this.status = e),
            (this.translation = d.zeros()),
            (this.rotation = C.identity()),
            (this.gravityScale = 1),
            (this.linvel = d.zeros()),
            (this.mass = 0),
            (this.massOnly = !1),
            (this.centerOfMass = d.zeros()),
            (this.translationsEnabledX = !0),
            (this.translationsEnabledY = !0),
            (this.angvel = 0),
            (this.principalAngularInertia = 0),
            (this.rotationsEnabled = !0),
            (this.linearDamping = 0),
            (this.angularDamping = 0),
            (this.canSleep = !0),
            (this.sleeping = !1),
            (this.ccdEnabled = !1),
            (this.dominanceGroup = 0);
        }
        static dynamic() {
          return new J(H.Dynamic);
        }
        static kinematicPositionBased() {
          return new J(H.KinematicPositionBased);
        }
        static kinematicVelocityBased() {
          return new J(H.KinematicVelocityBased);
        }
        static fixed() {
          return new J(H.Fixed);
        }
        static newDynamic() {
          return new J(H.Dynamic);
        }
        static newKinematicPositionBased() {
          return new J(H.KinematicPositionBased);
        }
        static newKinematicVelocityBased() {
          return new J(H.KinematicVelocityBased);
        }
        static newStatic() {
          return new J(H.Fixed);
        }
        setDominanceGroup(e) {
          return (this.dominanceGroup = e), this;
        }
        setEnabled(e) {
          return (this.enabled = e), this;
        }
        setTranslation(e, t) {
          if (typeof e != "number" || typeof t != "number")
            throw TypeError("The translation components must be numbers.");
          return (this.translation = { x: e, y: t }), this;
        }
        setRotation(e) {
          return (this.rotation = e), this;
        }
        setGravityScale(e) {
          return (this.gravityScale = e), this;
        }
        setAdditionalMass(e) {
          return (this.mass = e), (this.massOnly = !0), this;
        }
        setLinvel(e, t) {
          if (typeof e != "number" || typeof t != "number")
            throw TypeError("The linvel components must be numbers.");
          return (this.linvel = { x: e, y: t }), this;
        }
        setAngvel(e) {
          return (this.angvel = e), this;
        }
        setAdditionalMassProperties(e, t, r) {
          return (
            (this.mass = e),
            d.copy(this.centerOfMass, t),
            (this.principalAngularInertia = r),
            (this.massOnly = !1),
            this
          );
        }
        enabledTranslations(e, t) {
          return (
            (this.translationsEnabledX = e),
            (this.translationsEnabledY = t),
            this
          );
        }
        restrictTranslations(e, t) {
          return this.enabledTranslations(e, t);
        }
        lockTranslations() {
          return this.restrictTranslations(!1, !1);
        }
        lockRotations() {
          return (this.rotationsEnabled = !1), this;
        }
        setLinearDamping(e) {
          return (this.linearDamping = e), this;
        }
        setAngularDamping(e) {
          return (this.angularDamping = e), this;
        }
        setCanSleep(e) {
          return (this.canSleep = e), this;
        }
        setSleeping(e) {
          return (this.sleeping = e), this;
        }
        setCcdEnabled(e) {
          return (this.ccdEnabled = e), this;
        }
        setUserData(e) {
          return (this.userData = e), this;
        }
      });
    class ee {
      constructor() {
        (this.fconv = new Float64Array(1)),
          (this.uconv = new Uint32Array(this.fconv.buffer)),
          (this.data = new Array()),
          (this.size = 0);
      }
      set(t, r) {
        let a = this.index(t);
        for (; this.data.length <= a; ) this.data.push(null);
        this.data[a] == null && (this.size += 1), (this.data[a] = r);
      }
      len() {
        return this.size;
      }
      delete(t) {
        let r = this.index(t);
        r < this.data.length &&
          (this.data[r] != null && (this.size -= 1), (this.data[r] = null));
      }
      clear() {
        this.data = new Array();
      }
      get(t) {
        let r = this.index(t);
        return r < this.data.length ? this.data[r] : null;
      }
      forEach(t) {
        for (const r of this.data) r != null && t(r);
      }
      getAll() {
        return this.data.filter((t) => t != null);
      }
      index(t) {
        return (this.fconv[0] = t), this.uconv[0];
      }
    }
    (je = class {
      constructor(e) {
        (this.raw = e || new P()),
          (this.map = new ee()),
          e &&
            e.forEachRigidBodyHandle((t) => {
              this.map.set(t, new zt(e, null, t));
            });
      }
      free() {
        this.raw && this.raw.free(),
          (this.raw = void 0),
          this.map && this.map.clear(),
          (this.map = void 0);
      }
      finalizeDeserialization(e) {
        this.map.forEach((t) => t.finalizeDeserialization(e));
      }
      createRigidBody(e, t) {
        let r = d.intoRaw(t.translation),
          a = C.intoRaw(t.rotation),
          n = d.intoRaw(t.linvel),
          s = d.intoRaw(t.centerOfMass),
          c = this.raw.createRigidBody(
            t.enabled,
            r,
            a,
            t.gravityScale,
            t.mass,
            t.massOnly,
            s,
            n,
            t.angvel,
            t.principalAngularInertia,
            t.translationsEnabledX,
            t.translationsEnabledY,
            t.rotationsEnabled,
            t.linearDamping,
            t.angularDamping,
            t.status,
            t.canSleep,
            t.sleeping,
            t.ccdEnabled,
            t.dominanceGroup
          );
        r.free(), a.free(), n.free(), s.free();
        const _ = new zt(this.raw, e, c);
        return (_.userData = t.userData), this.map.set(c, _), _;
      }
      remove(e, t, r, a, n) {
        for (let s = 0; s < this.raw.rbNumColliders(e); s += 1)
          r.unmap(this.raw.rbCollider(e, s));
        a.forEachJointHandleAttachedToRigidBody(e, (s) => a.unmap(s)),
          n.forEachJointHandleAttachedToRigidBody(e, (s) => n.unmap(s)),
          this.raw.remove(e, t.raw, r.raw, a.raw, n.raw),
          this.map.delete(e);
      }
      len() {
        return this.map.len();
      }
      contains(e) {
        return this.get(e) != null;
      }
      get(e) {
        return this.map.get(e);
      }
      forEach(e) {
        this.map.forEach(e);
      }
      forEachActiveRigidBody(e, t) {
        e.forEachActiveRigidBodyHandle((r) => {
          t(this.get(r));
        });
      }
      getAll() {
        return this.map.getAll();
      }
    }),
      (he = class {
        constructor(e) {
          this.raw = e || new O();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        get dt() {
          return this.raw.dt;
        }
        get erp() {
          return this.raw.erp;
        }
        get allowedLinearError() {
          return this.raw.allowedLinearError;
        }
        get predictionDistance() {
          return this.raw.predictionDistance;
        }
        get maxVelocityIterations() {
          return this.raw.maxVelocityIterations;
        }
        get maxVelocityFrictionIterations() {
          return this.raw.maxVelocityFrictionIterations;
        }
        get maxStabilizationIterations() {
          return this.raw.maxStabilizationIterations;
        }
        get minIslandSize() {
          return this.raw.minIslandSize;
        }
        get maxCcdSubsteps() {
          return this.raw.maxCcdSubsteps;
        }
        set dt(e) {
          this.raw.dt = e;
        }
        set erp(e) {
          this.raw.erp = e;
        }
        set allowedLinearError(e) {
          this.raw.allowedLinearError = e;
        }
        set predictionDistance(e) {
          this.raw.predictionDistance = e;
        }
        set maxVelocityIterations(e) {
          this.raw.maxVelocityIterations = e;
        }
        set maxVelocityFrictionIterations(e) {
          this.raw.maxVelocityFrictionIterations = e;
        }
        set maxStabilizationIterations(e) {
          this.raw.maxStabilizationIterations = e;
        }
        set minIslandSize(e) {
          this.raw.minIslandSize = e;
        }
        set maxCcdSubsteps(e) {
          this.raw.maxCcdSubsteps = e;
        }
      }),
      (function (e) {
        (e[(e.Revolute = 0)] = "Revolute"),
          (e[(e.Fixed = 1)] = "Fixed"),
          (e[(e.Prismatic = 2)] = "Prismatic");
      })(D || (D = {})),
      (function (e) {
        (e[(e.AccelerationBased = 0)] = "AccelerationBased"),
          (e[(e.ForceBased = 1)] = "ForceBased");
      })(be || (be = {})),
      (X = class {
        constructor(e, t, r) {
          (this.rawSet = e), (this.bodySet = t), (this.handle = r);
        }
        static newTyped(e, t, r) {
          switch (e.jointType(r)) {
            case D.Revolute:
              return new Ce(e, t, r);
            case D.Prismatic:
              return new ge(e, t, r);
            case D.Fixed:
              return new de(e, t, r);
            default:
              return new X(e, t, r);
          }
        }
        finalizeDeserialization(e) {
          this.bodySet = e;
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        body1() {
          return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
        }
        body2() {
          return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
        }
        type() {
          return this.rawSet.jointType(this.handle);
        }
        anchor1() {
          return d.fromRaw(this.rawSet.jointAnchor1(this.handle));
        }
        anchor2() {
          return d.fromRaw(this.rawSet.jointAnchor2(this.handle));
        }
        setAnchor1(e) {
          const t = d.intoRaw(e);
          this.rawSet.jointSetAnchor1(this.handle, t), t.free();
        }
        setAnchor2(e) {
          const t = d.intoRaw(e);
          this.rawSet.jointSetAnchor2(this.handle, t), t.free();
        }
        setContactsEnabled(e) {
          this.rawSet.jointSetContactsEnabled(this.handle, e);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }),
      (Ot = class extends X {
        limitsEnabled() {
          return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
        }
        limitsMin() {
          return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
        }
        limitsMax() {
          return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
        }
        setLimits(e, t) {
          this.rawSet.jointSetLimits(this.handle, this.rawAxis(), e, t);
        }
        configureMotorModel(e) {
          this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), e);
        }
        configureMotorVelocity(e, t) {
          this.rawSet.jointConfigureMotorVelocity(
            this.handle,
            this.rawAxis(),
            e,
            t
          );
        }
        configureMotorPosition(e, t, r) {
          this.rawSet.jointConfigureMotorPosition(
            this.handle,
            this.rawAxis(),
            e,
            t,
            r
          );
        }
        configureMotor(e, t, r, a) {
          this.rawSet.jointConfigureMotor(
            this.handle,
            this.rawAxis(),
            e,
            t,
            r,
            a
          );
        }
      }),
      (de = class extends X {}),
      (ge = class extends Ot {
        rawAxis() {
          return yt.X;
        }
      }),
      (Ce = class extends Ot {
        rawAxis() {
          return yt.AngX;
        }
      }),
      (dt = class {
        constructor() {}
        static fixed(e, t, r, a) {
          let n = new dt();
          return (
            (n.anchor1 = e),
            (n.anchor2 = r),
            (n.frame1 = t),
            (n.frame2 = a),
            (n.jointType = D.Fixed),
            n
          );
        }
        static revolute(e, t) {
          let r = new dt();
          return (
            (r.anchor1 = e), (r.anchor2 = t), (r.jointType = D.Revolute), r
          );
        }
        static prismatic(e, t, r) {
          let a = new dt();
          return (
            (a.anchor1 = e),
            (a.anchor2 = t),
            (a.axis = r),
            (a.jointType = D.Prismatic),
            a
          );
        }
        intoRaw() {
          let e = d.intoRaw(this.anchor1),
            t = d.intoRaw(this.anchor2),
            r,
            a,
            n = !1,
            s = 0,
            c = 0;
          switch (this.jointType) {
            case D.Fixed:
              let _ = C.intoRaw(this.frame1),
                h = C.intoRaw(this.frame2);
              (a = z.fixed(e, _, t, h)), _.free(), h.free();
              break;
            case D.Prismatic:
              (r = d.intoRaw(this.axis)),
                this.limitsEnabled &&
                  ((n = !0), (s = this.limits[0]), (c = this.limits[1])),
                (a = z.prismatic(e, t, r, n, s, c)),
                r.free();
              break;
            case D.Revolute:
              a = z.revolute(e, t);
              break;
          }
          return e.free(), t.free(), a;
        }
      }),
      (we = class {
        constructor(e) {
          (this.raw = e || new L()),
            (this.map = new ee()),
            e &&
              e.forEachJointHandle((t) => {
                this.map.set(t, X.newTyped(e, null, t));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        finalizeDeserialization(e) {
          this.map.forEach((t) => t.finalizeDeserialization(e));
        }
        createJoint(e, t, r, a, n) {
          const s = t.intoRaw(),
            c = this.raw.createJoint(s, r, a, n);
          s.free();
          let _ = X.newTyped(this.raw, e, c);
          return this.map.set(c, _), _;
        }
        remove(e, t) {
          this.raw.remove(e, t), this.unmap(e);
        }
        forEachJointHandleAttachedToRigidBody(e, t) {
          this.raw.forEachJointAttachedToRigidBody(e, t);
        }
        unmap(e) {
          this.map.delete(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        get(e) {
          return this.map.get(e);
        }
        forEach(e) {
          this.map.forEach(e);
        }
        getAll() {
          return this.map.getAll();
        }
      }),
      (Q = class {
        constructor(e, t) {
          (this.rawSet = e), (this.handle = t);
        }
        static newTyped(e, t) {
          switch (e.jointType(t)) {
            case D.Revolute:
              return new Ae(e, t);
            case D.Prismatic:
              return new Se(e, t);
            case D.Fixed:
              return new _e(e, t);
            default:
              return new Q(e, t);
          }
        }
        isValid() {
          return this.rawSet.contains(this.handle);
        }
        setContactsEnabled(e) {
          this.rawSet.jointSetContactsEnabled(this.handle, e);
        }
        contactsEnabled() {
          return this.rawSet.jointContactsEnabled(this.handle);
        }
      }),
      (Vt = class extends Q {}),
      (_e = class extends Q {}),
      (Se = class extends Vt {
        rawAxis() {
          return yt.X;
        }
      }),
      (Ae = class extends Vt {
        rawAxis() {
          return yt.AngX;
        }
      }),
      (me = class {
        constructor(e) {
          (this.raw = e || new N()),
            (this.map = new ee()),
            e &&
              e.forEachJointHandle((t) => {
                this.map.set(t, Q.newTyped(this.raw, t));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        createJoint(e, t, r, a) {
          const n = e.intoRaw(),
            s = this.raw.createJoint(n, t, r, a);
          n.free();
          let c = Q.newTyped(this.raw, s);
          return this.map.set(s, c), c;
        }
        remove(e, t) {
          this.raw.remove(e, t), this.map.delete(e);
        }
        unmap(e) {
          this.map.delete(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        get(e) {
          return this.map.get(e);
        }
        forEach(e) {
          this.map.forEach(e);
        }
        forEachJointHandleAttachedToRigidBody(e, t) {
          this.raw.forEachJointAttachedToRigidBody(e, t);
        }
        getAll() {
          return this.map.getAll();
        }
      }),
      (function (e) {
        (e[(e.Average = 0)] = "Average"),
          (e[(e.Min = 1)] = "Min"),
          (e[(e.Multiply = 2)] = "Multiply"),
          (e[(e.Max = 3)] = "Max");
      })(lt || (lt = {})),
      (oe = class {
        constructor(e) {
          this.raw = e || new Z();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
      }),
      (pe = class {
        constructor(e) {
          this.raw = e || new G();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        forEachActiveRigidBodyHandle(e) {
          this.raw.forEachActiveRigidBodyHandle(e);
        }
      }),
      (ae = class {
        constructor(e) {
          this.raw = e || new W();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
      }),
      (ye = class {
        constructor(e) {
          (this.raw = e || new q()), (this.tempManifold = new Te(null));
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        contactsWith(e, t) {
          this.raw.contacts_with(e, t);
        }
        intersectionsWith(e, t) {
          this.raw.intersections_with(e, t);
        }
        contactPair(e, t, r) {
          const a = this.raw.contact_pair(e, t);
          if (a) {
            const n = a.collider1() != e;
            let s;
            for (s = 0; s < a.numContactManifolds(); ++s)
              (this.tempManifold.raw = a.contactManifold(s)),
                this.tempManifold.raw && r(this.tempManifold, n),
                this.tempManifold.free();
            a.free();
          }
        }
        intersectionPair(e, t) {
          return this.raw.intersection_pair(e, t);
        }
      }),
      (Te = class {
        constructor(e) {
          this.raw = e;
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        normal() {
          return d.fromRaw(this.raw.normal());
        }
        localNormal1() {
          return d.fromRaw(this.raw.local_n1());
        }
        localNormal2() {
          return d.fromRaw(this.raw.local_n2());
        }
        subshape1() {
          return this.raw.subshape1();
        }
        subshape2() {
          return this.raw.subshape2();
        }
        numContacts() {
          return this.raw.num_contacts();
        }
        localContactPoint1(e) {
          return d.fromRaw(this.raw.contact_local_p1(e));
        }
        localContactPoint2(e) {
          return d.fromRaw(this.raw.contact_local_p2(e));
        }
        contactDist(e) {
          return this.raw.contact_dist(e);
        }
        contactFid1(e) {
          return this.raw.contact_fid1(e);
        }
        contactFid2(e) {
          return this.raw.contact_fid2(e);
        }
        contactImpulse(e) {
          return this.raw.contact_impulse(e);
        }
        contactTangentImpulse(e) {
          return this.raw.contact_tangent_impulse(e);
        }
        numSolverContacts() {
          return this.raw.num_solver_contacts();
        }
        solverContactPoint(e) {
          return d.fromRaw(this.raw.solver_contact_point(e));
        }
        solverContactDist(e) {
          return this.raw.solver_contact_dist(e);
        }
        solverContactFriction(e) {
          return this.raw.solver_contact_friction(e);
        }
        solverContactRestitution(e) {
          return this.raw.solver_contact_restitution(e);
        }
        solverContactTangentVelocity(e) {
          return d.fromRaw(this.raw.solver_contact_tangent_velocity(e));
        }
      }),
      (rt = class {
        constructor(e, t, r, a, n) {
          (this.distance = e),
            (this.point1 = t),
            (this.point2 = r),
            (this.normal1 = a),
            (this.normal2 = n);
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new rt(
            e.distance(),
            d.fromRaw(e.point1()),
            d.fromRaw(e.point2()),
            d.fromRaw(e.normal1()),
            d.fromRaw(e.normal2())
          );
          return e.free(), t;
        }
      }),
      (function (e) {
        (e[(e.Vertex = 0)] = "Vertex"),
          (e[(e.Face = 1)] = "Face"),
          (e[(e.Unknown = 2)] = "Unknown");
      })(et || (et = {})),
      (wt = class {
        constructor(e, t) {
          (this.point = e), (this.isInside = t);
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new wt(d.fromRaw(e.point()), e.isInside());
          return e.free(), t;
        }
      }),
      (_t = class {
        constructor(e, t, r, a, n) {
          (this.featureType = et.Unknown),
            (this.featureId = void 0),
            (this.collider = e),
            (this.point = t),
            (this.isInside = r),
            n !== void 0 && (this.featureId = n),
            a !== void 0 && (this.featureType = a);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const r = new _t(
            e.get(t.colliderHandle()),
            d.fromRaw(t.point()),
            t.isInside(),
            t.featureType(),
            t.featureId()
          );
          return t.free(), r;
        }
      }),
      (Je = class {
        constructor(e, t) {
          (this.origin = e), (this.dir = t);
        }
        pointAt(e) {
          return {
            x: this.origin.x + this.dir.x * e,
            y: this.origin.y + this.dir.y * e,
          };
        }
      }),
      (pt = class {
        constructor(e, t, r, a) {
          (this.featureType = et.Unknown),
            (this.featureId = void 0),
            (this.toi = e),
            (this.normal = t),
            a !== void 0 && (this.featureId = a),
            r !== void 0 && (this.featureType = r);
        }
        static fromRaw(e) {
          if (!e) return null;
          const t = new pt(
            e.toi(),
            d.fromRaw(e.normal()),
            e.featureType(),
            e.featureId()
          );
          return e.free(), t;
        }
      }),
      (ht = class {
        constructor(e, t, r, a, n) {
          (this.featureType = et.Unknown),
            (this.featureId = void 0),
            (this.collider = e),
            (this.toi = t),
            (this.normal = r),
            n !== void 0 && (this.featureId = n),
            a !== void 0 && (this.featureType = a);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const r = new ht(
            e.get(t.colliderHandle()),
            t.toi(),
            d.fromRaw(t.normal()),
            t.featureType(),
            t.featureId()
          );
          return t.free(), r;
        }
      }),
      (Bt = class {
        constructor(e, t) {
          (this.collider = e), (this.toi = t);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const r = new Bt(e.get(t.colliderHandle()), t.toi());
          return t.free(), r;
        }
      }),
      (it = class {
        constructor(e, t, r, a, n) {
          (this.toi = e),
            (this.witness1 = t),
            (this.witness2 = r),
            (this.normal1 = a),
            (this.normal2 = n);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const r = new it(
            t.toi(),
            d.fromRaw(t.witness1()),
            d.fromRaw(t.witness2()),
            d.fromRaw(t.normal1()),
            d.fromRaw(t.normal2())
          );
          return t.free(), r;
        }
      }),
      (bt = class extends it {
        constructor(e, t, r, a, n, s) {
          super(t, r, a, n, s), (this.collider = e);
        }
        static fromRaw(e, t) {
          if (!t) return null;
          const r = new bt(
            e.get(t.colliderHandle()),
            t.toi(),
            d.fromRaw(t.witness1()),
            d.fromRaw(t.witness2()),
            d.fromRaw(t.normal1()),
            d.fromRaw(t.normal2())
          );
          return t.free(), r;
        }
      }),
      (k = class {
        static fromRaw(e, t) {
          const r = e.coShapeType(t);
          let a, n, s, c, _, h, p;
          switch (r) {
            case R.Ball:
              return new Pt(e.coRadius(t));
            case R.Cuboid:
              return (a = e.coHalfExtents(t)), new kt(a.x, a.y);
            case R.RoundCuboid:
              return (
                (a = e.coHalfExtents(t)),
                (n = e.coRoundRadius(t)),
                new Lt(a.x, a.y, n)
              );
            case R.Capsule:
              return (_ = e.coHalfHeight(t)), (h = e.coRadius(t)), new xt(_, h);
            case R.Segment:
              return (
                (s = e.coVertices(t)),
                new Nt(d.new(s[0], s[1]), d.new(s[2], s[3]))
              );
            case R.Polyline:
              return (s = e.coVertices(t)), (c = e.coIndices(t)), new Ht(s, c);
            case R.Triangle:
              return (
                (s = e.coVertices(t)),
                new Wt(d.new(s[0], s[1]), d.new(s[2], s[3]), d.new(s[4], s[5]))
              );
            case R.RoundTriangle:
              return (
                (s = e.coVertices(t)),
                (n = e.coRoundRadius(t)),
                new Gt(
                  d.new(s[0], s[1]),
                  d.new(s[2], s[3]),
                  d.new(s[4], s[5]),
                  n
                )
              );
            case R.HalfSpace:
              return (p = d.fromRaw(e.coHalfspaceNormal(t))), new Ft(p);
            case R.TriMesh:
              return (s = e.coVertices(t)), (c = e.coIndices(t)), new qt(s, c);
            case R.HeightField:
              const u = e.coHeightfieldScale(t),
                b = e.coHeightfieldHeights(t);
              return new Dt(b, u);
            case R.ConvexPolygon:
              return (s = e.coVertices(t)), new ct(s, !1);
            case R.RoundConvexPolygon:
              return (
                (s = e.coVertices(t)),
                (n = e.coRoundRadius(t)),
                new ut(s, n, !1)
              );
            default:
              throw new Error("unknown shape type: " + r);
          }
        }
        castShape(e, t, r, a, n, s, c, _, h) {
          let p = d.intoRaw(e),
            u = C.intoRaw(t),
            b = d.intoRaw(r),
            y = d.intoRaw(n),
            j = C.intoRaw(s),
            F = d.intoRaw(c),
            V = this.intoRaw(),
            U = a.intoRaw(),
            tt = it.fromRaw(null, V.castShape(p, u, b, U, y, j, F, _, h));
          return (
            p.free(),
            u.free(),
            b.free(),
            y.free(),
            j.free(),
            F.free(),
            V.free(),
            U.free(),
            tt
          );
        }
        intersectsShape(e, t, r, a, n) {
          let s = d.intoRaw(e),
            c = C.intoRaw(t),
            _ = d.intoRaw(a),
            h = C.intoRaw(n),
            p = this.intoRaw(),
            u = r.intoRaw(),
            b = p.intersectsShape(s, c, u, _, h);
          return s.free(), c.free(), _.free(), h.free(), p.free(), u.free(), b;
        }
        contactShape(e, t, r, a, n, s) {
          let c = d.intoRaw(e),
            _ = C.intoRaw(t),
            h = d.intoRaw(a),
            p = C.intoRaw(n),
            u = this.intoRaw(),
            b = r.intoRaw(),
            y = rt.fromRaw(u.contactShape(c, _, b, h, p, s));
          return c.free(), _.free(), h.free(), p.free(), u.free(), b.free(), y;
        }
        containsPoint(e, t, r) {
          let a = d.intoRaw(e),
            n = C.intoRaw(t),
            s = d.intoRaw(r),
            c = this.intoRaw(),
            _ = c.containsPoint(a, n, s);
          return a.free(), n.free(), s.free(), c.free(), _;
        }
        projectPoint(e, t, r, a) {
          let n = d.intoRaw(e),
            s = C.intoRaw(t),
            c = d.intoRaw(r),
            _ = this.intoRaw(),
            h = wt.fromRaw(_.projectPoint(n, s, c, a));
          return n.free(), s.free(), c.free(), _.free(), h;
        }
        intersectsRay(e, t, r, a) {
          let n = d.intoRaw(t),
            s = C.intoRaw(r),
            c = d.intoRaw(e.origin),
            _ = d.intoRaw(e.dir),
            h = this.intoRaw(),
            p = h.intersectsRay(n, s, c, _, a);
          return n.free(), s.free(), c.free(), _.free(), h.free(), p;
        }
        castRay(e, t, r, a, n) {
          let s = d.intoRaw(t),
            c = C.intoRaw(r),
            _ = d.intoRaw(e.origin),
            h = d.intoRaw(e.dir),
            p = this.intoRaw(),
            u = p.castRay(s, c, _, h, a, n);
          return s.free(), c.free(), _.free(), h.free(), p.free(), u;
        }
        castRayAndGetNormal(e, t, r, a, n) {
          let s = d.intoRaw(t),
            c = C.intoRaw(r),
            _ = d.intoRaw(e.origin),
            h = d.intoRaw(e.dir),
            p = this.intoRaw(),
            u = pt.fromRaw(p.castRayAndGetNormal(s, c, _, h, a, n));
          return s.free(), c.free(), _.free(), h.free(), p.free(), u;
        }
      }),
      (function (e) {
        (e[(e.Ball = 0)] = "Ball"),
          (e[(e.Cuboid = 1)] = "Cuboid"),
          (e[(e.Capsule = 2)] = "Capsule"),
          (e[(e.Segment = 3)] = "Segment"),
          (e[(e.Polyline = 4)] = "Polyline"),
          (e[(e.Triangle = 5)] = "Triangle"),
          (e[(e.TriMesh = 6)] = "TriMesh"),
          (e[(e.HeightField = 7)] = "HeightField"),
          (e[(e.ConvexPolygon = 9)] = "ConvexPolygon"),
          (e[(e.RoundCuboid = 10)] = "RoundCuboid"),
          (e[(e.RoundTriangle = 11)] = "RoundTriangle"),
          (e[(e.RoundConvexPolygon = 12)] = "RoundConvexPolygon"),
          (e[(e.HalfSpace = 13)] = "HalfSpace");
      })(R || (R = {})),
      (Pt = class extends k {
        constructor(e) {
          super(), (this.type = R.Ball), (this.radius = e);
        }
        intoRaw() {
          return f.ball(this.radius);
        }
      }),
      (Ft = class extends k {
        constructor(e) {
          super(), (this.type = R.HalfSpace), (this.normal = e);
        }
        intoRaw() {
          let e = d.intoRaw(this.normal),
            t = f.halfspace(e);
          return e.free(), t;
        }
      }),
      (kt = class extends k {
        constructor(e, t) {
          super(), (this.type = R.Cuboid), (this.halfExtents = d.new(e, t));
        }
        intoRaw() {
          return f.cuboid(this.halfExtents.x, this.halfExtents.y);
        }
      }),
      (Lt = class extends k {
        constructor(e, t, r) {
          super(),
            (this.type = R.RoundCuboid),
            (this.halfExtents = d.new(e, t)),
            (this.borderRadius = r);
        }
        intoRaw() {
          return f.roundCuboid(
            this.halfExtents.x,
            this.halfExtents.y,
            this.borderRadius
          );
        }
      }),
      (xt = class extends k {
        constructor(e, t) {
          super(),
            (this.type = R.Capsule),
            (this.halfHeight = e),
            (this.radius = t);
        }
        intoRaw() {
          return f.capsule(this.halfHeight, this.radius);
        }
      }),
      (Nt = class extends k {
        constructor(e, t) {
          super(), (this.type = R.Segment), (this.a = e), (this.b = t);
        }
        intoRaw() {
          let e = d.intoRaw(this.a),
            t = d.intoRaw(this.b),
            r = f.segment(e, t);
          return e.free(), t.free(), r;
        }
      }),
      (Wt = class extends k {
        constructor(e, t, r) {
          super(),
            (this.type = R.Triangle),
            (this.a = e),
            (this.b = t),
            (this.c = r);
        }
        intoRaw() {
          let e = d.intoRaw(this.a),
            t = d.intoRaw(this.b),
            r = d.intoRaw(this.c),
            a = f.triangle(e, t, r);
          return e.free(), t.free(), r.free(), a;
        }
      }),
      (Gt = class extends k {
        constructor(e, t, r, a) {
          super(),
            (this.type = R.RoundTriangle),
            (this.a = e),
            (this.b = t),
            (this.c = r),
            (this.borderRadius = a);
        }
        intoRaw() {
          let e = d.intoRaw(this.a),
            t = d.intoRaw(this.b),
            r = d.intoRaw(this.c),
            a = f.roundTriangle(e, t, r, this.borderRadius);
          return e.free(), t.free(), r.free(), a;
        }
      }),
      (Ht = class extends k {
        constructor(e, t) {
          super(),
            (this.type = R.Polyline),
            (this.vertices = e),
            (this.indices = t ?? new Uint32Array(0));
        }
        intoRaw() {
          return f.polyline(this.vertices, this.indices);
        }
      }),
      (qt = class extends k {
        constructor(e, t) {
          super(),
            (this.type = R.TriMesh),
            (this.vertices = e),
            (this.indices = t);
        }
        intoRaw() {
          return f.trimesh(this.vertices, this.indices);
        }
      }),
      (ct = class extends k {
        constructor(e, t) {
          super(),
            (this.type = R.ConvexPolygon),
            (this.vertices = e),
            (this.skipConvexHullComputation = !!t);
        }
        intoRaw() {
          return this.skipConvexHullComputation
            ? f.convexPolyline(this.vertices)
            : f.convexHull(this.vertices);
        }
      }),
      (ut = class extends k {
        constructor(e, t, r) {
          super(),
            (this.type = R.RoundConvexPolygon),
            (this.vertices = e),
            (this.borderRadius = t),
            (this.skipConvexHullComputation = !!r);
        }
        intoRaw() {
          return this.skipConvexHullComputation
            ? f.roundConvexPolyline(this.vertices, this.borderRadius)
            : f.roundConvexHull(this.vertices, this.borderRadius);
        }
      }),
      (Dt = class extends k {
        constructor(e, t) {
          super(),
            (this.type = R.HeightField),
            (this.heights = e),
            (this.scale = t);
        }
        intoRaw() {
          let e = d.intoRaw(this.scale),
            t = f.heightfield(this.heights, e);
          return e.free(), t;
        }
      }),
      (function (e) {
        (e[(e.DYNAMIC_DYNAMIC = 1)] = "DYNAMIC_DYNAMIC"),
          (e[(e.DYNAMIC_KINEMATIC = 12)] = "DYNAMIC_KINEMATIC"),
          (e[(e.DYNAMIC_FIXED = 2)] = "DYNAMIC_FIXED"),
          (e[(e.KINEMATIC_KINEMATIC = 52224)] = "KINEMATIC_KINEMATIC"),
          (e[(e.KINEMATIC_FIXED = 8704)] = "KINEMATIC_FIXED"),
          (e[(e.FIXED_FIXED = 32)] = "FIXED_FIXED"),
          (e[(e.DEFAULT = 15)] = "DEFAULT"),
          (e[(e.ALL = 60943)] = "ALL");
      })(Tt || (Tt = {})),
      (Mt = class {
        constructor(e, t, r, a) {
          (this.colliderSet = e),
            (this.handle = t),
            (this._parent = r),
            (this._shape = a);
        }
        finalizeDeserialization(e) {
          this.handle != null &&
            (this._parent = e.get(this.colliderSet.raw.coParent(this.handle)));
        }
        ensureShapeIsCached() {
          this._shape ||
            (this._shape = k.fromRaw(this.colliderSet.raw, this.handle));
        }
        get shape() {
          return this.ensureShapeIsCached(), this._shape;
        }
        isValid() {
          return this.colliderSet.raw.contains(this.handle);
        }
        translation() {
          return d.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
        }
        rotation() {
          return C.fromRaw(this.colliderSet.raw.coRotation(this.handle));
        }
        isSensor() {
          return this.colliderSet.raw.coIsSensor(this.handle);
        }
        setSensor(e) {
          this.colliderSet.raw.coSetSensor(this.handle, e);
        }
        setShape(e) {
          let t = e.intoRaw();
          this.colliderSet.raw.coSetShape(this.handle, t),
            t.free(),
            (this._shape = e);
        }
        setEnabled(e) {
          this.colliderSet.raw.coSetEnabled(this.handle, e);
        }
        isEnabled() {
          return this.colliderSet.raw.coIsEnabled(this.handle);
        }
        setRestitution(e) {
          this.colliderSet.raw.coSetRestitution(this.handle, e);
        }
        setFriction(e) {
          this.colliderSet.raw.coSetFriction(this.handle, e);
        }
        frictionCombineRule() {
          return this.colliderSet.raw.coFrictionCombineRule(this.handle);
        }
        setFrictionCombineRule(e) {
          this.colliderSet.raw.coSetFrictionCombineRule(this.handle, e);
        }
        restitutionCombineRule() {
          return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
        }
        setRestitutionCombineRule(e) {
          this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, e);
        }
        setCollisionGroups(e) {
          this.colliderSet.raw.coSetCollisionGroups(this.handle, e);
        }
        setSolverGroups(e) {
          this.colliderSet.raw.coSetSolverGroups(this.handle, e);
        }
        activeHooks() {
          return this.colliderSet.raw.coActiveHooks(this.handle);
        }
        setActiveHooks(e) {
          this.colliderSet.raw.coSetActiveHooks(this.handle, e);
        }
        activeEvents() {
          return this.colliderSet.raw.coActiveEvents(this.handle);
        }
        setActiveEvents(e) {
          this.colliderSet.raw.coSetActiveEvents(this.handle, e);
        }
        activeCollisionTypes() {
          return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
        }
        setContactForceEventThreshold(e) {
          return this.colliderSet.raw.coSetContactForceEventThreshold(
            this.handle,
            e
          );
        }
        contactForceEventThreshold() {
          return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
        }
        setActiveCollisionTypes(e) {
          this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, e);
        }
        setDensity(e) {
          this.colliderSet.raw.coSetDensity(this.handle, e);
        }
        setMass(e) {
          this.colliderSet.raw.coSetMass(this.handle, e);
        }
        setMassProperties(e, t, r) {
          let a = d.intoRaw(t);
          this.colliderSet.raw.coSetMassProperties(this.handle, e, a, r),
            a.free();
        }
        setTranslation(e) {
          this.colliderSet.raw.coSetTranslation(this.handle, e.x, e.y);
        }
        setTranslationWrtParent(e) {
          this.colliderSet.raw.coSetTranslationWrtParent(this.handle, e.x, e.y);
        }
        setRotation(e) {
          this.colliderSet.raw.coSetRotation(this.handle, e);
        }
        setRotationWrtParent(e) {
          this.colliderSet.raw.coSetRotationWrtParent(this.handle, e);
        }
        shapeType() {
          return this.colliderSet.raw.coShapeType(this.handle);
        }
        halfExtents() {
          return d.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
        }
        setHalfExtents(e) {
          const t = d.intoRaw(e);
          this.colliderSet.raw.coSetHalfExtents(this.handle, t);
        }
        radius() {
          return this.colliderSet.raw.coRadius(this.handle);
        }
        setRadius(e) {
          this.colliderSet.raw.coSetRadius(this.handle, e);
        }
        roundRadius() {
          return this.colliderSet.raw.coRoundRadius(this.handle);
        }
        setRoundRadius(e) {
          this.colliderSet.raw.coSetRoundRadius(this.handle, e);
        }
        halfHeight() {
          return this.colliderSet.raw.coHalfHeight(this.handle);
        }
        setHalfHeight(e) {
          this.colliderSet.raw.coSetHalfHeight(this.handle, e);
        }
        vertices() {
          return this.colliderSet.raw.coVertices(this.handle);
        }
        indices() {
          return this.colliderSet.raw.coIndices(this.handle);
        }
        heightfieldHeights() {
          return this.colliderSet.raw.coHeightfieldHeights(this.handle);
        }
        heightfieldScale() {
          let e = this.colliderSet.raw.coHeightfieldScale(this.handle);
          return d.fromRaw(e);
        }
        parent() {
          return this._parent;
        }
        friction() {
          return this.colliderSet.raw.coFriction(this.handle);
        }
        restitution() {
          return this.colliderSet.raw.coRestitution(this.handle);
        }
        density() {
          return this.colliderSet.raw.coDensity(this.handle);
        }
        mass() {
          return this.colliderSet.raw.coMass(this.handle);
        }
        volume() {
          return this.colliderSet.raw.coVolume(this.handle);
        }
        collisionGroups() {
          return this.colliderSet.raw.coCollisionGroups(this.handle);
        }
        solverGroups() {
          return this.colliderSet.raw.coSolverGroups(this.handle);
        }
        containsPoint(e) {
          let t = d.intoRaw(e),
            r = this.colliderSet.raw.coContainsPoint(this.handle, t);
          return t.free(), r;
        }
        projectPoint(e, t) {
          let r = d.intoRaw(e),
            a = wt.fromRaw(
              this.colliderSet.raw.coProjectPoint(this.handle, r, t)
            );
          return r.free(), a;
        }
        intersectsRay(e, t) {
          let r = d.intoRaw(e.origin),
            a = d.intoRaw(e.dir),
            n = this.colliderSet.raw.coIntersectsRay(this.handle, r, a, t);
          return r.free(), a.free(), n;
        }
        castShape(e, t, r, a, n, s, c) {
          let _ = d.intoRaw(e),
            h = d.intoRaw(r),
            p = C.intoRaw(a),
            u = d.intoRaw(n),
            b = t.intoRaw(),
            y = it.fromRaw(
              this.colliderSet,
              this.colliderSet.raw.coCastShape(this.handle, _, b, h, p, u, s, c)
            );
          return _.free(), h.free(), p.free(), u.free(), b.free(), y;
        }
        castCollider(e, t, r, a, n) {
          let s = d.intoRaw(e),
            c = d.intoRaw(r),
            _ = bt.fromRaw(
              this.colliderSet,
              this.colliderSet.raw.coCastCollider(
                this.handle,
                s,
                t.handle,
                c,
                a,
                n
              )
            );
          return s.free(), c.free(), _;
        }
        intersectsShape(e, t, r) {
          let a = d.intoRaw(t),
            n = C.intoRaw(r),
            s = e.intoRaw(),
            c = this.colliderSet.raw.coIntersectsShape(this.handle, s, a, n);
          return a.free(), n.free(), s.free(), c;
        }
        contactShape(e, t, r, a) {
          let n = d.intoRaw(t),
            s = C.intoRaw(r),
            c = e.intoRaw(),
            _ = rt.fromRaw(
              this.colliderSet.raw.coContactShape(this.handle, c, n, s, a)
            );
          return n.free(), s.free(), c.free(), _;
        }
        contactCollider(e, t) {
          return rt.fromRaw(
            this.colliderSet.raw.coContactCollider(this.handle, e.handle, t)
          );
        }
        castRay(e, t, r) {
          let a = d.intoRaw(e.origin),
            n = d.intoRaw(e.dir),
            s = this.colliderSet.raw.coCastRay(this.handle, a, n, t, r);
          return a.free(), n.free(), s;
        }
        castRayAndGetNormal(e, t, r) {
          let a = d.intoRaw(e.origin),
            n = d.intoRaw(e.dir),
            s = pt.fromRaw(
              this.colliderSet.raw.coCastRayAndGetNormal(
                this.handle,
                a,
                n,
                t,
                r
              )
            );
          return a.free(), n.free(), s;
        }
      }),
      (function (e) {
        (e[(e.Density = 0)] = "Density"),
          (e[(e.Mass = 1)] = "Mass"),
          (e[(e.MassProps = 2)] = "MassProps");
      })(Y || (Y = {})),
      (M = class {
        constructor(e) {
          (this.enabled = !0),
            (this.shape = e),
            (this.massPropsMode = Y.Density),
            (this.density = 1),
            (this.friction = 0.5),
            (this.restitution = 0),
            (this.rotation = C.identity()),
            (this.translation = d.zeros()),
            (this.isSensor = !1),
            (this.collisionGroups = 4294967295),
            (this.solverGroups = 4294967295),
            (this.frictionCombineRule = lt.Average),
            (this.restitutionCombineRule = lt.Average),
            (this.activeCollisionTypes = Tt.DEFAULT),
            (this.activeEvents = 0),
            (this.activeHooks = 0),
            (this.mass = 0),
            (this.centerOfMass = d.zeros()),
            (this.contactForceEventThreshold = 0),
            (this.principalAngularInertia = 0),
            (this.rotationsEnabled = !0);
        }
        static ball(e) {
          const t = new Pt(e);
          return new M(t);
        }
        static capsule(e, t) {
          const r = new xt(e, t);
          return new M(r);
        }
        static segment(e, t) {
          const r = new Nt(e, t);
          return new M(r);
        }
        static triangle(e, t, r) {
          const a = new Wt(e, t, r);
          return new M(a);
        }
        static roundTriangle(e, t, r, a) {
          const n = new Gt(e, t, r, a);
          return new M(n);
        }
        static polyline(e, t) {
          const r = new Ht(e, t);
          return new M(r);
        }
        static trimesh(e, t) {
          const r = new qt(e, t);
          return new M(r);
        }
        static cuboid(e, t) {
          const r = new kt(e, t);
          return new M(r);
        }
        static roundCuboid(e, t, r) {
          const a = new Lt(e, t, r);
          return new M(a);
        }
        static halfspace(e) {
          const t = new Ft(e);
          return new M(t);
        }
        static heightfield(e, t) {
          const r = new Dt(e, t);
          return new M(r);
        }
        static convexHull(e) {
          const t = new ct(e, !1);
          return new M(t);
        }
        static convexPolyline(e) {
          const t = new ct(e, !0);
          return new M(t);
        }
        static roundConvexHull(e, t) {
          const r = new ut(e, t, !1);
          return new M(r);
        }
        static roundConvexPolyline(e, t) {
          const r = new ut(e, t, !0);
          return new M(r);
        }
        setTranslation(e, t) {
          if (typeof e != "number" || typeof t != "number")
            throw TypeError("The translation components must be numbers.");
          return (this.translation = { x: e, y: t }), this;
        }
        setRotation(e) {
          return (this.rotation = e), this;
        }
        setSensor(e) {
          return (this.isSensor = e), this;
        }
        setEnabled(e) {
          return (this.enabled = e), this;
        }
        setDensity(e) {
          return (this.massPropsMode = Y.Density), (this.density = e), this;
        }
        setMass(e) {
          return (this.massPropsMode = Y.Mass), (this.mass = e), this;
        }
        setMassProperties(e, t, r) {
          return (
            (this.massPropsMode = Y.MassProps),
            (this.mass = e),
            d.copy(this.centerOfMass, t),
            (this.principalAngularInertia = r),
            this
          );
        }
        setRestitution(e) {
          return (this.restitution = e), this;
        }
        setFriction(e) {
          return (this.friction = e), this;
        }
        setFrictionCombineRule(e) {
          return (this.frictionCombineRule = e), this;
        }
        setRestitutionCombineRule(e) {
          return (this.restitutionCombineRule = e), this;
        }
        setCollisionGroups(e) {
          return (this.collisionGroups = e), this;
        }
        setSolverGroups(e) {
          return (this.solverGroups = e), this;
        }
        setActiveHooks(e) {
          return (this.activeHooks = e), this;
        }
        setActiveEvents(e) {
          return (this.activeEvents = e), this;
        }
        setActiveCollisionTypes(e) {
          return (this.activeCollisionTypes = e), this;
        }
        setContactForceEventThreshold(e) {
          return (this.contactForceEventThreshold = e), this;
        }
      }),
      (se = class {
        constructor(e) {
          (this.raw = e || new E()),
            (this.map = new ee()),
            e &&
              e.forEachColliderHandle((t) => {
                this.map.set(t, new Mt(this, t, null));
              });
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
        }
        castClosure(e) {
          return (t) => {
            if (e) return e(this.get(t));
          };
        }
        finalizeDeserialization(e) {
          this.map.forEach((t) => t.finalizeDeserialization(e));
        }
        createCollider(e, t, r) {
          let a = r != null && r != null;
          if (a && isNaN(r))
            throw Error(
              "Cannot create a collider with a parent rigid-body handle that is not a number."
            );
          let n = t.shape.intoRaw(),
            s = d.intoRaw(t.translation),
            c = C.intoRaw(t.rotation),
            _ = d.intoRaw(t.centerOfMass),
            h = this.raw.createCollider(
              t.enabled,
              n,
              s,
              c,
              t.massPropsMode,
              t.mass,
              _,
              t.principalAngularInertia,
              t.density,
              t.friction,
              t.restitution,
              t.frictionCombineRule,
              t.restitutionCombineRule,
              t.isSensor,
              t.collisionGroups,
              t.solverGroups,
              t.activeCollisionTypes,
              t.activeHooks,
              t.activeEvents,
              t.contactForceEventThreshold,
              a,
              a ? r : 0,
              e.raw
            );
          n.free(), s.free(), c.free(), _.free();
          let p = a ? e.get(r) : null,
            u = new Mt(this, h, p, t.shape);
          return this.map.set(h, u), u;
        }
        remove(e, t, r, a) {
          this.raw.remove(e, t.raw, r.raw, a), this.unmap(e);
        }
        unmap(e) {
          this.map.delete(e);
        }
        get(e) {
          return this.map.get(e);
        }
        len() {
          return this.map.len();
        }
        contains(e) {
          return this.get(e) != null;
        }
        forEach(e) {
          this.map.forEach(e);
        }
        getAll() {
          return this.map.getAll();
        }
      }),
      (fe = class {
        constructor(e) {
          this.raw = e || new St();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        step(e, t, r, a, n, s, c, _, h, p, u, b) {
          let y = d.intoRaw(e);
          u
            ? this.raw.stepWithEvents(
                y,
                t.raw,
                r.raw,
                a.raw,
                n.raw,
                s.raw,
                c.raw,
                _.raw,
                h.raw,
                p.raw,
                u.raw,
                b,
                b ? b.filterContactPair : null,
                b ? b.filterIntersectionPair : null
              )
            : this.raw.step(
                y,
                t.raw,
                r.raw,
                a.raw,
                n.raw,
                s.raw,
                c.raw,
                _.raw,
                h.raw,
                p.raw
              ),
            y.free();
        }
      }),
      (function (e) {
        (e[(e.EXCLUDE_FIXED = 1)] = "EXCLUDE_FIXED"),
          (e[(e.EXCLUDE_KINEMATIC = 2)] = "EXCLUDE_KINEMATIC"),
          (e[(e.EXCLUDE_DYNAMIC = 4)] = "EXCLUDE_DYNAMIC"),
          (e[(e.EXCLUDE_SENSORS = 8)] = "EXCLUDE_SENSORS"),
          (e[(e.EXCLUDE_SOLIDS = 16)] = "EXCLUDE_SOLIDS"),
          (e[(e.ONLY_DYNAMIC = 3)] = "ONLY_DYNAMIC"),
          (e[(e.ONLY_KINEMATIC = 5)] = "ONLY_KINEMATIC"),
          (e[(e.ONLY_FIXED = 6)] = "ONLY_FIXED");
      })(ve || (ve = {})),
      (Re = class {
        constructor(e) {
          this.raw = e || new nt();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        update(e, t) {
          this.raw.update(e.raw, t.raw);
        }
        castRay(e, t, r, a, n, s, c, _, h, p) {
          let u = d.intoRaw(r.origin),
            b = d.intoRaw(r.dir),
            y = Bt.fromRaw(
              t,
              this.raw.castRay(e.raw, t.raw, u, b, a, n, s, c, _, h, p)
            );
          return u.free(), b.free(), y;
        }
        castRayAndGetNormal(e, t, r, a, n, s, c, _, h, p) {
          let u = d.intoRaw(r.origin),
            b = d.intoRaw(r.dir),
            y = ht.fromRaw(
              t,
              this.raw.castRayAndGetNormal(
                e.raw,
                t.raw,
                u,
                b,
                a,
                n,
                s,
                c,
                _,
                h,
                p
              )
            );
          return u.free(), b.free(), y;
        }
        intersectionsWithRay(e, t, r, a, n, s, c, _, h, p, u) {
          let b = d.intoRaw(r.origin),
            y = d.intoRaw(r.dir),
            j = (F) => s(ht.fromRaw(t, F));
          this.raw.intersectionsWithRay(
            e.raw,
            t.raw,
            b,
            y,
            a,
            n,
            j,
            c,
            _,
            h,
            p,
            u
          ),
            b.free(),
            y.free();
        }
        intersectionWithShape(e, t, r, a, n, s, c, _, h, p) {
          let u = d.intoRaw(r),
            b = C.intoRaw(a),
            y = n.intoRaw(),
            j = this.raw.intersectionWithShape(
              e.raw,
              t.raw,
              u,
              b,
              y,
              s,
              c,
              _,
              h,
              p
            );
          return u.free(), b.free(), y.free(), j;
        }
        projectPoint(e, t, r, a, n, s, c, _, h) {
          let p = d.intoRaw(r),
            u = _t.fromRaw(
              t,
              this.raw.projectPoint(e.raw, t.raw, p, a, n, s, c, _, h)
            );
          return p.free(), u;
        }
        projectPointAndGetFeature(e, t, r, a, n, s, c, _) {
          let h = d.intoRaw(r),
            p = _t.fromRaw(
              t,
              this.raw.projectPointAndGetFeature(e.raw, t.raw, h, a, n, s, c, _)
            );
          return h.free(), p;
        }
        intersectionsWithPoint(e, t, r, a, n, s, c, _, h) {
          let p = d.intoRaw(r);
          this.raw.intersectionsWithPoint(e.raw, t.raw, p, a, n, s, c, _, h),
            p.free();
        }
        castShape(e, t, r, a, n, s, c, _, h, p, u, b, y) {
          let j = d.intoRaw(r),
            F = C.intoRaw(a),
            V = d.intoRaw(n),
            U = s.intoRaw(),
            tt = bt.fromRaw(
              t,
              this.raw.castShape(e.raw, t.raw, j, F, V, U, c, _, h, p, u, b, y)
            );
          return j.free(), F.free(), V.free(), U.free(), tt;
        }
        intersectionsWithShape(e, t, r, a, n, s, c, _, h, p, u) {
          let b = d.intoRaw(r),
            y = C.intoRaw(a),
            j = n.intoRaw();
          this.raw.intersectionsWithShape(
            e.raw,
            t.raw,
            b,
            y,
            j,
            s,
            c,
            _,
            h,
            p,
            u
          ),
            b.free(),
            y.free(),
            j.free();
        }
        collidersWithAabbIntersectingAabb(e, t, r) {
          let a = d.intoRaw(e),
            n = d.intoRaw(t);
          this.raw.collidersWithAabbIntersectingAabb(a, n, r),
            a.free(),
            n.free();
        }
      }),
      (Jt = class {
        constructor(e) {
          this.raw = e || new jt();
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        serializeAll(e, t, r, a, n, s, c, _, h) {
          let p = d.intoRaw(e);
          const u = this.raw.serializeAll(
            p,
            t.raw,
            r.raw,
            a.raw,
            n.raw,
            s.raw,
            c.raw,
            _.raw,
            h.raw
          );
          return p.free(), u;
        }
        deserializeAll(e) {
          return Ut.fromRaw(this.raw.deserializeAll(e));
        }
      }),
      (le = class {
        constructor(e, t) {
          (this.vertices = e), (this.colors = t);
        }
      }),
      (ce = class {
        constructor(e) {
          this.raw = e || new ft();
        }
        free() {
          this.raw && this.raw.free(),
            (this.raw = void 0),
            (this.vertices = void 0),
            (this.colors = void 0);
        }
        render(e, t, r, a, n) {
          this.raw.render(e.raw, t.raw, r.raw, a.raw, n.raw),
            (this.vertices = this.raw.vertices()),
            (this.colors = this.raw.colors());
        }
      }),
      (ne = class {}),
      (ue = class {
        constructor(e, t, r, a, n) {
          (this.params = t),
            (this.bodies = r),
            (this.colliders = a),
            (this.queries = n),
            (this.raw = new gt(e)),
            (this.rawCharacterCollision = new at()),
            (this._applyImpulsesToDynamicBodies = !1),
            (this._characterMass = null);
        }
        free() {
          this.raw && (this.raw.free(), this.rawCharacterCollision.free()),
            (this.raw = void 0),
            (this.rawCharacterCollision = void 0);
        }
        up() {
          return this.raw.up();
        }
        setUp(e) {
          let t = d.intoRaw(e);
          return this.raw.setUp(t);
        }
        applyImpulsesToDynamicBodies() {
          return this._applyImpulsesToDynamicBodies;
        }
        setApplyImpulsesToDynamicBodies(e) {
          this._applyImpulsesToDynamicBodies = e;
        }
        characterMass() {
          return this._characterMass;
        }
        setCharacterMass(e) {
          this._characterMass = e;
        }
        offset() {
          return this.raw.offset();
        }
        setOffset(e) {
          this.raw.setOffset(e);
        }
        slideEnabled() {
          return this.raw.slideEnabled();
        }
        setSlideEnabled(e) {
          this.raw.setSlideEnabled(e);
        }
        autostepMaxHeight() {
          return this.raw.autostepMaxHeight();
        }
        autostepMinWidth() {
          return this.raw.autostepMinWidth();
        }
        autostepIncludesDynamicBodies() {
          return this.raw.autostepIncludesDynamicBodies();
        }
        autostepEnabled() {
          return this.raw.autostepEnabled();
        }
        enableAutostep(e, t, r) {
          this.raw.enableAutostep(e, t, r);
        }
        disableAutostep() {
          return this.raw.disableAutostep();
        }
        maxSlopeClimbAngle() {
          return this.raw.maxSlopeClimbAngle();
        }
        setMaxSlopeClimbAngle(e) {
          this.raw.setMaxSlopeClimbAngle(e);
        }
        minSlopeSlideAngle() {
          return this.raw.minSlopeSlideAngle();
        }
        setMinSlopeSlideAngle(e) {
          this.raw.setMinSlopeSlideAngle(e);
        }
        snapToGroundDistance() {
          return this.raw.snapToGroundDistance();
        }
        enableSnapToGround(e) {
          this.raw.enableSnapToGround(e);
        }
        disableSnapToGround() {
          this.raw.disableSnapToGround();
        }
        snapToGroundEnabled() {
          return this.raw.snapToGroundEnabled();
        }
        computeColliderMovement(e, t, r, a, n) {
          let s = d.intoRaw(t);
          this.raw.computeColliderMovement(
            this.params.dt,
            this.bodies.raw,
            this.colliders.raw,
            this.queries.raw,
            e.handle,
            s,
            this._applyImpulsesToDynamicBodies,
            this._characterMass,
            r,
            a,
            this.colliders.castClosure(n)
          ),
            s.free();
        }
        computedMovement() {
          return d.fromRaw(this.raw.computedMovement());
        }
        computedGrounded() {
          return this.raw.computedGrounded();
        }
        numComputedCollisions() {
          return this.raw.numComputedCollisions();
        }
        computedCollision(e, t) {
          if (this.raw.computedCollision(e, this.rawCharacterCollision)) {
            let r = this.rawCharacterCollision;
            return (
              (t = t ?? new ne()),
              (t.translationApplied = d.fromRaw(r.translationApplied())),
              (t.translationRemaining = d.fromRaw(r.translationRemaining())),
              (t.toi = r.toi()),
              (t.witness1 = d.fromRaw(r.worldWitness1())),
              (t.witness2 = d.fromRaw(r.worldWitness2())),
              (t.normal1 = d.fromRaw(r.worldNormal1())),
              (t.normal2 = d.fromRaw(r.worldNormal2())),
              (t.collider = this.colliders.get(r.handle())),
              t
            );
          } else return null;
        }
      }),
      (Ut = class {
        constructor(e, t, r, a, n, s, c, _, h, p, u, b, y, j) {
          (this.gravity = e),
            (this.integrationParameters = new he(t)),
            (this.islands = new pe(r)),
            (this.broadPhase = new ae(a)),
            (this.narrowPhase = new ye(n)),
            (this.bodies = new je(s)),
            (this.colliders = new se(c)),
            (this.impulseJoints = new we(_)),
            (this.multibodyJoints = new me(h)),
            (this.ccdSolver = new oe(p)),
            (this.queryPipeline = new Re(u)),
            (this.physicsPipeline = new fe(b)),
            (this.serializationPipeline = new Jt(y)),
            (this.debugRenderPipeline = new ce(j)),
            (this.characterControllers = new Set()),
            this.impulseJoints.finalizeDeserialization(this.bodies),
            this.bodies.finalizeDeserialization(this.colliders),
            this.colliders.finalizeDeserialization(this.bodies);
        }
        free() {
          this.integrationParameters.free(),
            this.islands.free(),
            this.broadPhase.free(),
            this.narrowPhase.free(),
            this.bodies.free(),
            this.colliders.free(),
            this.impulseJoints.free(),
            this.multibodyJoints.free(),
            this.ccdSolver.free(),
            this.queryPipeline.free(),
            this.physicsPipeline.free(),
            this.serializationPipeline.free(),
            this.debugRenderPipeline.free(),
            this.characterControllers.forEach((e) => e.free()),
            (this.integrationParameters = void 0),
            (this.islands = void 0),
            (this.broadPhase = void 0),
            (this.narrowPhase = void 0),
            (this.bodies = void 0),
            (this.colliders = void 0),
            (this.ccdSolver = void 0),
            (this.impulseJoints = void 0),
            (this.multibodyJoints = void 0),
            (this.queryPipeline = void 0),
            (this.physicsPipeline = void 0),
            (this.serializationPipeline = void 0),
            (this.debugRenderPipeline = void 0),
            (this.characterControllers = void 0);
        }
        static fromRaw(e) {
          return e
            ? new Ut(
                d.fromRaw(e.takeGravity()),
                e.takeIntegrationParameters(),
                e.takeIslandManager(),
                e.takeBroadPhase(),
                e.takeNarrowPhase(),
                e.takeBodies(),
                e.takeColliders(),
                e.takeImpulseJoints(),
                e.takeMultibodyJoints()
              )
            : null;
        }
        takeSnapshot() {
          return this.serializationPipeline.serializeAll(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints
          );
        }
        static restoreSnapshot(e) {
          return new Jt().deserializeAll(e);
        }
        debugRender() {
          return (
            this.debugRenderPipeline.render(
              this.bodies,
              this.colliders,
              this.impulseJoints,
              this.multibodyJoints,
              this.narrowPhase
            ),
            new le(
              this.debugRenderPipeline.vertices,
              this.debugRenderPipeline.colors
            )
          );
        }
        step(e, t) {
          this.physicsPipeline.step(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints,
            this.ccdSolver,
            e,
            t
          ),
            this.queryPipeline.update(this.bodies, this.colliders);
        }
        propagateModifiedBodyPositionsToColliders() {
          this.bodies.raw.propagateModifiedBodyPositionsToColliders(
            this.colliders.raw
          );
        }
        updateSceneQueries() {
          this.propagateModifiedBodyPositionsToColliders(),
            this.queryPipeline.update(this.bodies, this.colliders);
        }
        get timestep() {
          return this.integrationParameters.dt;
        }
        set timestep(e) {
          this.integrationParameters.dt = e;
        }
        get maxVelocityIterations() {
          return this.integrationParameters.maxVelocityIterations;
        }
        set maxVelocityIterations(e) {
          this.integrationParameters.maxVelocityIterations = e;
        }
        get maxVelocityFrictionIterations() {
          return this.integrationParameters.maxVelocityFrictionIterations;
        }
        set maxVelocityFrictionIterations(e) {
          this.integrationParameters.maxVelocityFrictionIterations = e;
        }
        get maxStabilizationIterations() {
          return this.integrationParameters.maxStabilizationIterations;
        }
        set maxStabilizationIterations(e) {
          this.integrationParameters.maxStabilizationIterations = e;
        }
        createRigidBody(e) {
          return this.bodies.createRigidBody(this.colliders, e);
        }
        createCharacterController(e) {
          let t = new ue(
            e,
            this.integrationParameters,
            this.bodies,
            this.colliders,
            this.queryPipeline
          );
          return this.characterControllers.add(t), t;
        }
        removeCharacterController(e) {
          this.characterControllers.delete(e), e.free();
        }
        createCollider(e, t) {
          let r = t ? t.handle : void 0;
          return this.colliders.createCollider(this.bodies, e, r);
        }
        createImpulseJoint(e, t, r, a) {
          return this.impulseJoints.createJoint(
            this.bodies,
            e,
            t.handle,
            r.handle,
            a
          );
        }
        createMultibodyJoint(e, t, r, a) {
          return this.multibodyJoints.createJoint(e, t.handle, r.handle, a);
        }
        getRigidBody(e) {
          return this.bodies.get(e);
        }
        getCollider(e) {
          return this.colliders.get(e);
        }
        getImpulseJoint(e) {
          return this.impulseJoints.get(e);
        }
        getMultibodyJoint(e) {
          return this.multibodyJoints.get(e);
        }
        removeRigidBody(e) {
          this.bodies &&
            this.bodies.remove(
              e.handle,
              this.islands,
              this.colliders,
              this.impulseJoints,
              this.multibodyJoints
            );
        }
        removeCollider(e, t) {
          this.colliders &&
            this.colliders.remove(e.handle, this.islands, this.bodies, t);
        }
        removeImpulseJoint(e, t) {
          this.impulseJoints && this.impulseJoints.remove(e.handle, t);
        }
        removeMultibodyJoint(e, t) {
          this.impulseJoints && this.multibodyJoints.remove(e.handle, t);
        }
        forEachCollider(e) {
          this.colliders.forEach(e);
        }
        forEachRigidBody(e) {
          this.bodies.forEach(e);
        }
        forEachActiveRigidBody(e) {
          this.bodies.forEachActiveRigidBody(this.islands, e);
        }
        castRay(e, t, r, a, n, s, c, _) {
          return this.queryPipeline.castRay(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n,
            s ? s.handle : null,
            c ? c.handle : null,
            this.colliders.castClosure(_)
          );
        }
        castRayAndGetNormal(e, t, r, a, n, s, c, _) {
          return this.queryPipeline.castRayAndGetNormal(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n,
            s ? s.handle : null,
            c ? c.handle : null,
            this.colliders.castClosure(_)
          );
        }
        intersectionsWithRay(e, t, r, a, n, s, c, _, h) {
          this.queryPipeline.intersectionsWithRay(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n,
            s,
            c ? c.handle : null,
            _ ? _.handle : null,
            this.colliders.castClosure(h)
          );
        }
        intersectionWithShape(e, t, r, a, n, s, c, _) {
          let h = this.queryPipeline.intersectionWithShape(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n,
            s ? s.handle : null,
            c ? c.handle : null,
            this.colliders.castClosure(_)
          );
          return h != null ? this.colliders.get(h) : null;
        }
        projectPoint(e, t, r, a, n, s, c) {
          return this.queryPipeline.projectPoint(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n ? n.handle : null,
            s ? s.handle : null,
            this.colliders.castClosure(c)
          );
        }
        projectPointAndGetFeature(e, t, r, a, n, s) {
          return this.queryPipeline.projectPointAndGetFeature(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a ? a.handle : null,
            n ? n.handle : null,
            this.colliders.castClosure(s)
          );
        }
        intersectionsWithPoint(e, t, r, a, n, s, c) {
          this.queryPipeline.intersectionsWithPoint(
            this.bodies,
            this.colliders,
            e,
            this.colliders.castClosure(t),
            r,
            a,
            n ? n.handle : null,
            s ? s.handle : null,
            this.colliders.castClosure(c)
          );
        }
        castShape(e, t, r, a, n, s, c, _, h, p, u) {
          return this.queryPipeline.castShape(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            a,
            n,
            s,
            c,
            _,
            h ? h.handle : null,
            p ? p.handle : null,
            this.colliders.castClosure(u)
          );
        }
        intersectionsWithShape(e, t, r, a, n, s, c, _, h) {
          this.queryPipeline.intersectionsWithShape(
            this.bodies,
            this.colliders,
            e,
            t,
            r,
            this.colliders.castClosure(a),
            n,
            s,
            c ? c.handle : null,
            _ ? _.handle : null,
            this.colliders.castClosure(h)
          );
        }
        collidersWithAabbIntersectingAabb(e, t, r) {
          this.queryPipeline.collidersWithAabbIntersectingAabb(
            e,
            t,
            this.colliders.castClosure(r)
          );
        }
        contactsWith(e, t) {
          this.narrowPhase.contactsWith(
            e.handle,
            this.colliders.castClosure(t)
          );
        }
        intersectionsWith(e, t) {
          this.narrowPhase.intersectionsWith(
            e.handle,
            this.colliders.castClosure(t)
          );
        }
        contactPair(e, t, r) {
          this.narrowPhase.contactPair(e.handle, t.handle, r);
        }
        intersectionPair(e, t) {
          return this.narrowPhase.intersectionPair(e.handle, t.handle);
        }
      }),
      (function (e) {
        (e[(e.COLLISION_EVENTS = 1)] = "COLLISION_EVENTS"),
          (e[(e.CONTACT_FORCE_EVENTS = 2)] = "CONTACT_FORCE_EVENTS");
      })(re || (re = {})),
      (Ee = class {
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        collider1() {
          return this.raw.collider1();
        }
        collider2() {
          return this.raw.collider2();
        }
        totalForce() {
          return d.fromRaw(this.raw.total_force());
        }
        totalForceMagnitude() {
          return this.raw.total_force_magnitude();
        }
        maxForceDirection() {
          return d.fromRaw(this.raw.max_force_direction());
        }
        maxForceMagnitude() {
          return this.raw.max_force_magnitude();
        }
      }),
      (Ne = class {
        constructor(e, t) {
          this.raw = t || new ot(e);
        }
        free() {
          this.raw && this.raw.free(), (this.raw = void 0);
        }
        drainCollisionEvents(e) {
          this.raw.drainCollisionEvents(e);
        }
        drainContactForceEvents(e) {
          let t = new Ee();
          this.raw.drainContactForceEvents((r) => {
            (t.raw = r), e(t), t.free();
          });
        }
        clear() {
          this.raw.clear();
        }
      }),
      (function (e) {
        (e[(e.FILTER_CONTACT_PAIRS = 1)] = "FILTER_CONTACT_PAIRS"),
          (e[(e.FILTER_INTERSECTION_PAIRS = 2)] = "FILTER_INTERSECTION_PAIRS");
      })(ie || (ie = {})),
      (function (e) {
        (e[(e.EMPTY = 0)] = "EMPTY"),
          (e[(e.COMPUTE_IMPULSE = 1)] = "COMPUTE_IMPULSE");
      })(Ie || (Ie = {})),
      (qe = function () {
        return Ue();
      }),
      (gr = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            get ActiveCollisionTypes() {
              return Tt;
            },
            get ActiveEvents() {
              return re;
            },
            get ActiveHooks() {
              return ie;
            },
            Ball: Pt,
            BroadPhase: ae,
            CCDSolver: oe,
            Capsule: xt,
            CharacterCollision: ne,
            get CoefficientCombineRule() {
              return lt;
            },
            Collider: Mt,
            ColliderDesc: M,
            ColliderSet: se,
            ConvexPolygon: ct,
            Cuboid: kt,
            DebugRenderBuffers: le,
            DebugRenderPipeline: ce,
            EventQueue: Ne,
            get FeatureType() {
              return et;
            },
            FixedImpulseJoint: de,
            FixedMultibodyJoint: _e,
            HalfSpace: Ft,
            Heightfield: Dt,
            ImpulseJoint: X,
            ImpulseJointSet: we,
            IntegrationParameters: he,
            IslandManager: pe,
            JointData: dt,
            get JointType() {
              return D;
            },
            KinematicCharacterController: ue,
            get MassPropsMode() {
              return Y;
            },
            get MotorModel() {
              return be;
            },
            MultibodyJoint: Q,
            MultibodyJointSet: me,
            NarrowPhase: ye,
            PhysicsPipeline: fe,
            PointColliderProjection: _t,
            PointProjection: wt,
            Polyline: Ht,
            PrismaticImpulseJoint: ge,
            PrismaticMultibodyJoint: Se,
            get QueryFilterFlags() {
              return ve;
            },
            QueryPipeline: Re,
            Ray: Je,
            RayColliderIntersection: ht,
            RayColliderToi: Bt,
            RayIntersection: pt,
            RevoluteImpulseJoint: Ce,
            RevoluteMultibodyJoint: Ae,
            RigidBody: zt,
            RigidBodyDesc: J,
            RigidBodySet: je,
            get RigidBodyType() {
              return H;
            },
            RotationOps: C,
            RoundConvexPolygon: ut,
            RoundCuboid: Lt,
            RoundTriangle: Gt,
            Segment: Nt,
            SerializationPipeline: Jt,
            Shape: k,
            ShapeColliderTOI: bt,
            ShapeContact: rt,
            ShapeTOI: it,
            get ShapeType() {
              return R;
            },
            get SolverFlags() {
              return Ie;
            },
            TempContactForceEvent: Ee,
            TempContactManifold: Te,
            TriMesh: qt,
            Triangle: Wt,
            UnitImpulseJoint: Ot,
            UnitMultibodyJoint: Vt,
            Vector2: Pe,
            VectorOps: d,
            World: Ut,
            version: qe,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ));
  })();
export {
  Tt as ActiveCollisionTypes,
  re as ActiveEvents,
  ie as ActiveHooks,
  Pt as Ball,
  ae as BroadPhase,
  oe as CCDSolver,
  xt as Capsule,
  ne as CharacterCollision,
  lt as CoefficientCombineRule,
  Mt as Collider,
  M as ColliderDesc,
  se as ColliderSet,
  ct as ConvexPolygon,
  kt as Cuboid,
  le as DebugRenderBuffers,
  ce as DebugRenderPipeline,
  Ne as EventQueue,
  et as FeatureType,
  de as FixedImpulseJoint,
  _e as FixedMultibodyJoint,
  Ft as HalfSpace,
  Dt as Heightfield,
  X as ImpulseJoint,
  we as ImpulseJointSet,
  he as IntegrationParameters,
  pe as IslandManager,
  dt as JointData,
  D as JointType,
  ue as KinematicCharacterController,
  Y as MassPropsMode,
  be as MotorModel,
  Q as MultibodyJoint,
  me as MultibodyJointSet,
  ye as NarrowPhase,
  fe as PhysicsPipeline,
  _t as PointColliderProjection,
  wt as PointProjection,
  Ht as Polyline,
  ge as PrismaticImpulseJoint,
  Se as PrismaticMultibodyJoint,
  ve as QueryFilterFlags,
  Re as QueryPipeline,
  Je as Ray,
  ht as RayColliderIntersection,
  Bt as RayColliderToi,
  pt as RayIntersection,
  Ce as RevoluteImpulseJoint,
  Ae as RevoluteMultibodyJoint,
  zt as RigidBody,
  J as RigidBodyDesc,
  je as RigidBodySet,
  H as RigidBodyType,
  C as RotationOps,
  ut as RoundConvexPolygon,
  Lt as RoundCuboid,
  Gt as RoundTriangle,
  Nt as Segment,
  Jt as SerializationPipeline,
  k as Shape,
  bt as ShapeColliderTOI,
  rt as ShapeContact,
  it as ShapeTOI,
  R as ShapeType,
  Ie as SolverFlags,
  Ee as TempContactForceEvent,
  Te as TempContactManifold,
  qt as TriMesh,
  Wt as Triangle,
  Ot as UnitImpulseJoint,
  Vt as UnitMultibodyJoint,
  Pe as Vector2,
  d as VectorOps,
  Ut as World,
  Rd as __tla,
  gr as default,
  qe as version,
};
