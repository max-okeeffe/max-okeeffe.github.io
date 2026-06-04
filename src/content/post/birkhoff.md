---
title: "Birkhoff's Theorem"
publishDate: 2026-05-31
description: "An introduction to pointwise ergodic theory and Birkhoff's theorem."
tags: [ Pointwise Ergodic Theory ]
---

Consider a dynamical system $(X, T)$. Thus $X$ is any set and $T$ is any function which maps $X$ to itself. Because $T$ has the same domain and range we can consider the iterates of $T$, i.e. given a positive integer $n$ we define $T^n$ to be the composition of $T$ with itself $n$ times. We set $T^0 = \mathrm{id}_X$ and if $T$ is invertible we define $T^{-n} = (T^{-1})^n$ for $n \in \mathbb{N}$.

The study of dynamical systems is often concerned with the long-term behaviour of an element $x \in X$ under the iterates of $T$. More specifically, the *orbit* of $x$ is defined as
$$
\mathcal{O}(x) = \{ T^nx : n \in \mathbb{N} \}.
$$

For a general dynamical system the sorts of questions we can ask about $\mathcal{O}(x)$ are fairly limited. The easiest may be: is the orbit of $x$ finite (in which case we say that the orbit is *periodic*) or infinite? By imposing a structure on $X$ we can ask more questions. For example, if $X$ is a topological space then we could ask whether $\mathcal{O}(x)$ is dense in $X$ or not.

## Equidistribution

Another natural structure we can impose on $X$ is by equipping it with a probability measure. In order for $\mu$ and $T$ to be compatible we require that $T$ is measurable and $T$ is *measure preserving* in the sense that $\mu(T^{-1}A) = \mu(A)$ for all measurable sets $A \subseteq X$. In this case we call the triple $(X, \mu, T)$ a *measure preserving system*. One benefit of doing so is for a specific behaviour, we can quantify the "amount" of $x \in X$ for which that behaviour holds. Another benefit is that for a given $x \in X$ we can ask how "evenly distributed" its orbit is.

Intuitively, we would like to think that the orbit of $x \in X$ is evenly distributed if, for any measurable set $A \subseteq X$, the sequence $(T^nx)_{n \in \mathbb{N}}$ spends the "right amount of time" in $A$ compared to the "size" of $A$. More formally, we have the two following quantitative notions:
1. the "size" of $A$, given by $\mu(A)$; and
2. the proportion of $Tx, T^2x, \dotsc, T^Nx$ that lies in $A$ for large $N$.

If the orbit of $x$ is evenly distributed then these quantities should be approximately equal. More formally, we say that $x$ is *equidistributed* under $T$ if for every measurable $A \subseteq X$ we have
$$
\lim_{N \to \infty} \frac{|\{ 1 \leq n \leq N : T^nx \in A \}|}{N} = \mu(A).
$$

### Birkhoff's Theorem

We can now ask for which $x \in X$ the orbit of $x$ is equidistributed in $X$. One of the central results of ergodic theory is Birkhoff's theorem, which provides a surprisingly simple answer to this question. In order to state Birkhoff's theorem fully we will need another definition. We say that $T$ is *ergodic* (with respect to $\mu$) if the only $T$-invariant sets, i.e. those for which $T^{-1}A = A$, are those which satisfy $\mu(A) \in \{0, 1\}$. In other words, $T$ is ergodic if the only sets which are fixed as sets by $T$ are the empty set and the whole space (up to sets of measure zero).

> **Theorem (Birkhoff, 1931).**
> Let $(X,\mu,T)$ be a measure preserving system. Then for any $f \in L^1(X)$ the ergodic averages
> $$
> \frac{1}{N} \sum_{n=1}^N f(T^n x)
> $$
> converge as $N \to \infty$ for $\mu$--almost every $x \in X$. Moreover, if $T$ is ergodic then the limiting function is equal to $\int_X f \,d\mu$.

Birkhoff's theorem is often interpreted as saying that the "time averages" of $f$ converge almost everywhere to the "spatial average" of $f$ if $T$ is ergodic. By specialising to the case where $f = 1_A$ for any measurable $A$, we see that Birkhoff's theorem implies that if $T$ is ergodic then the orbit of $\mu$--almost every $x \in X$ is equidistributed.

## Examples and Applications

We give some examples of measure preserving systems whose transformation is ergodic and thus give some applications of Birkhoff's theorem. To prove that a transformation is ergodic it will often be convenient to use the following equivalent formulation.

> **Proposition.**
> Let $(X,\mu, T)$ be a measure preserving system. Then $T$ is ergodic if and only if the all $T$-invariant functions, i.e. those for which $f \circ T = f$, are constant almost everywhere.

*Proof.*
First suppose the only $T$-invariant functions are constant almost everywhere. Let $A$ be a $T$-invariant set and let $f = 1_A$. Then
$$
f \circ T = 1_{T^{-1}A} = 1_A = f
$$
so $f$ is a $T$-invariant function and is therefore constant almost everywhere. But $f$ is an indicator function so either $f$ is equal to 0 or 1 almost everywhere. It follows that
$$
\mu(A) = \int_X f \,d\mu \in \{0, 1\}
$$
and thus $T$ is ergodic.

Now assume $T$ is ergodic and suppose $f$ is $T$-invariant. For $a \in \mathbb{R}$ consider the level set
$$
S_a = \{ x \in X : f(x) \leq a \}.
$$
Since $f$ is $T$-invariant we have
$$
T^{-1}S_a = \{ x \in X : f(Tx) \leq a \} = \{ x \in X : f(x) \leq a \} = S_a,
$$
so $S_a$ is $T$-invariant and hence $\mu(S_a) \in \{0,1\}$. Set
$$
c = \sup \{ a \in \mathbb{R} : \mu(S_a) = 0 \}.
$$
By monotonicity of the sets $S_a$ an continuity of measure, it follows that $f=c$ almost everywhere.
<span class="proof-end">$\square$</span>

### Rotations on the Torus

Consider the torus $\mathbb{T} = \mathbb{R}/\mathbb{Z}$ equipped with the normalised Lebesgue measure, and for $\alpha \in \mathbb{T}$ define $R_\alpha$ by $R_\alpha x = x + \alpha$ (mod 1). If $\alpha = \frac{p}{q}$ is rational then the set
$$
A = \left \{ \frac{k}{q} + t : k \in \{0,1,\dotsc, p-1\}, 0 \leq t \leq \frac{1}{2q} \right \}
$$
is $R_\alpha$-invariant but has measure $\frac{1}{2}$ so $R_\alpha$ is not ergodic.

Now suppose $\alpha$ is irrational. We show that $R_\alpha$ is ergodic by using the above proposition. Suppose $f$ is an $R_\alpha$-invariant function. Without loss of generality we may assume $f \in L^2(\mathbb{T})$. Then we can expand $f$ into its Fourier series:
$$
f(x) = \sum_{n \in \mathbb{Z}} c_n e(nx)
$$
where $e(x) = e^{2\pi i x}$ and $c \in \ell^2(\mathbb{Z})$. Then we also have
$$
f(x) = f(R_\alpha x) = f(x+\alpha) = \sum_{n \in \mathbb{Z}} c_n e(n\alpha) e(nx),
$$
so by uniqueness of Fourier coefficients it follows that $c_n = c_n e(n\alpha)$ for all $n$. If $n \neq 0$ then $e(n\alpha) \neq 1$ since $\alpha$ is irrational, so $c_n = 0$ for all $n \neq 0$. We have therefore shown that $f = c_0$, i.e. $f$ is constant. The result follows.

Although Birkhoff's theorem implies that the orbit of almost every $x \in \mathbb{T}$ under irrational rotations is equidistributed, we can prove that this is true for every $x$. Note the definition of $\mathcal{O}(x)$ being equidistributed can rewritten as
$$
\lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N 1_A(T^nx) = \int_X 1_A \,d\mu.
$$
Since the $\sigma$-algebra on $\mathbb{T}$ is generated by open intervals, it suffices to prove this in the case where $A$ is an open interval. We will first prove that
$$
\lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N f(T^nx) = \int_\mathbb{T} f(t) \,dt
$$
holds for all continuous functions $f$ on $\mathbb{T}$. Observe that if $k \in \mathbb{Z}$ is non-zero then
$$
\left| \frac{1}{N} \sum_{n=1}^N e(k(x+n\alpha)) \right| = \left| \frac{e(kN\alpha)-1}{N(e(k\alpha)-1)} \right| \to 0
$$
as $N \to \infty$, since $\alpha$ is irrational and $k$ is non-zero so $e(k\alpha) \neq 1$. Therefore, if $P(x) = \sum_{|m| \leq M} c_m e(mx)$ is a trigonometric polynomial then by linearity it follows that
$$
\lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N P(x+n\alpha) = c_0.
$$
Now take $f \in C(\mathbb{T})$. By the Stone--Weierstrass theorem trigonometric polynomials are dense in the space of continuous functions on the torus equipped with the uniform norm. Thus for any $\varepsilon>0$ we can find a trigonometric polynomial $P$ suh that $\|f - P\|_{L^\infty(\mathbb{T})} < \varepsilon$. We can bound
$$
\left| \frac{1}{N} \sum_{n=1}^N f(x+n\alpha) - \int_\mathbb{T} f(t) \,dt \right| \leq \left| \frac{1}{N} \sum_{n=1}^N P(x+n\alpha) - \int_\mathbb{T} P(t) \,dt \right| + 2 \varepsilon, 
$$
then use orthogonality of characters and take limits as $N \to \infty$ to conclude
$$
\left| \frac{1}{N} \sum_{n=1}^N f(x+n\alpha) - \int_\mathbb{T} f(t) \,dt \right| \leq 2 \varepsilon.
$$
Taking $\varepsilon \to 0$ yields the case where $f \in C(\mathbb{T})$. To conclude, take an open interval $I$ and $\varepsilon>0$. We can find continuous functions $f_-$ and $f_+$ such that $f_- \leq 1_I \leq f_+$ and $\int_\mathbb{T} f_+(t) - f_-(t) \,dt < \varepsilon$. Then
$$
\frac{1}{N} \sum_{n=1}^N f_- - \int_\mathbb{T} f_+(t) \,dt \leq \frac{1}{N} \sum_{n=1}^N 1_I - |I| \leq \frac{1}{N} \sum_{n=1}^N f_+ - \int_\mathbb{T} f_-(t) \,dt,
$$
so taking limits superior and inferior we see that
$$
\limsup_{N \to \infty} \left| \frac{1}{N} \sum_{n=1}^N 1_I(x+n\alpha) - |I| \right|, \liminf_{N \to \infty} \left| \frac{1}{N} \sum_{n=1}^N 1_I(x+n\alpha) - |I| \right| \leq \varepsilon.
$$
Taking $\varepsilon \to 0$ yields the result[^1].

We can use the equidistribution of irrational rotations to prove a form of Benford's law. Fix a base $b \geq 2$ and let $k$ be a positive integer which is not equal to a power of $b$. For $i \in \{ 1, \dots, b-1 \}$ let $p_i$ denote the frequency that $i$ appears as the first digit of the powers $k^n$ for $n \in \mathbb{N}$. Then since
$$
k^n = b^{\lfloor n \log_b k \rfloor + \{ n \log_b k \}},
$$
in base $b$ we see that $k^n$ has leading digit $i$ if and only if $\lfloor b^{ \{ n\log_b k \} } \rfloor = i$, if and only if
$$
\log_b i \leq \{ n \log_b k \} < \log_b(i+1).
$$
Note that $\log_b k$ is irrational since $k$ is not a power of $b$. Therefore,
$$
p_i = \lim_{N \to \infty} \frac{| \{ 1 \leq n \leq N : \log_b i \leq \{ n \log_b k \} < \log_b(i+1) \} |}{N} = \log_b \left( 1 + \frac{1}{i} \right).
$$
Thus the frequency of leading digits is not uniform. Note also that the distribution is independent of $k$.

### The Multiplier Map

We continue with the torus but define $T_b x = bx$ (mod 1) where $b \geq 2$ is an integer. This map is also ergodic as can be seen by the Fourier analysis argument we used for irrational rotations. Indeed, if $f \circ T_b = f$ and
$$
f(x) = \sum_{n \in \mathbb{Z}} c_n e(nx)
$$
then
$$
f(x) = f(T_bx) = f(bx) = \sum_{n \in \mathbb{Z}} c_n e(bnx).
$$
By uniquenss of Fourier coefficients it follows that $c_n=0$ for all integers $n$ not divisible by $b$ and $c_n = c_{bn}$ for all $n$ divisible by $b$. But the coefficients $c_n$ are square summable hence we must have $c_n=0$ for all $n \neq 0$. It follows that $f$ is constant and thus $T$ is ergodic.

For $x \in [0, 1)$ let $p_i$ denote the frequency of the digit $i$ in its base $b$ expansion. Observe the digit in the $n$th place is given by $b \{ b^n x \rfloor \} = \lfloor b T_b^n(x) \rfloor$. Thus the $n$th place digit is equal to $i$ if and only if $\frac{i}{b} \leq T_b^n(x) < \frac{i+1}{b}$. Therefore,
$$
p_i = \lim_{N \to \infty} \frac{| \{ 1 \leq n \leq N : \frac{i}{b} \leq T_b^n(x) < \frac{i+1}{b} \} |}{N}.
$$
Birkhoff's theorem and the fact that $T_b$ is ergodic imply that for almost-every $x \in [0,1)$, we have $p_i = \frac{1}{b}$ for all $i \in \{0,1,\dotsc, b-1\}$. Numbers whose base $b$ expansion has digit $i$ with frequency $\frac{1}{b}$ for all $i$ are called *normal* numbers (in base $b$). Since the set of bases is countable, we have also proved that almost every $x \in [0,1)$ is normal in every base.

### The Gauss map

Define $T : \mathbb{T} \to \mathbb{T}$ by $Tx = \frac{1}{x}$ (mod 1). Note $T$ is not a meausre preserving transformation with respect to the Lebesgue measure, but it is measure preserving with respect to the *Gauss measure*, defined by
$$
\mu(A) = \frac{1}{\log 2} \int_A \frac{1}{1+x} \,dx
$$
for all Lebesgue measurable sets $A$, where the integral is defined after identifying $\mathbb{T}$ with $[0,1)$.

The transformation $T$ is called the *Gauss map* or *continued fraction transformation*. The Gauss map is ergodic with respect to the Gauss measure. The connection with continued fractions can be seen as follows. Note every $x \in (0,1)$ can be expanded as 
$$
x = \frac{1}{x_1 + \frac{1}{{x_2 + \frac{1}{x_3 + \frac{1}{x_4 + \dotsb}}}}}
$$
where $x_n \in \mathbb{N}$. The $n$th coefficient in the continued fraction expansion of $x \in (0,1)$ is given by
$$
x_n = \left \lfloor \frac{1}{T^nx} \right \rfloor.
$$
We can calculate the frequency $p_i$ with which the number $i \in \mathbb{N}$ appears in the continued fraction of a typical $x$. Indeed, $x_n=i$ if and only if
$$
\frac{1}{i+1} < T^n x \leq \frac{1}{i+1}.
$$
By Birkhoff's theorem and the ergodicity of the Gauss map, it follows that
$$
p_i = \lim_{N \to \infty} \frac{| \{ 1 \leq n \leq N : \frac{1}{i+1} < T^n x \leq \frac{1}{i} \} |}{N} = \frac{1}{\log 2} \int_\frac{1}{i+1}^\frac{1}{i} \frac{1}{1+x} \,dx = \frac{1}{\log 2} \log \left( \frac{(i+1)^2}{i(i+2)} \right).
$$
for $\mu$--almost every $x \in [0,1)$, where $\mu$ denotes the Gauss measure. But the Gauss measure and Lebesgue measure have the same null sets, so the result also holds almost everywhere in the usual sense.

## The Proof of Birkhoff's Theorem

We now provide a proof of Birkhoff's theorem. So far we have restricted ourselves to the case where $\mu$ is a finite measure on $X$ and $f \in L^1(X)$. The proof we give here will establish that pointwise convergence holds on any measure space and for any $f \in L^p(X)$ where $1 \leq p < \infty$. The key result we use will be the following.

> **Lemma.**
> Let $(X,\mu)$ be a measure space. Given a sequence of linear operators $A_N : L^p(X) \to \mathcal{L}(X)$, where $\mathcal{L}(X)$ denotes the space of measurable functions on $X$ and $1 \leq p \leq \infty$, define the maximal operator
> $$
> A^* = \sup_{N \in \mathbb{N}} |A_N|.
> $$
> Suppose there exists $1 \leq q \leq \infty$ such that $A^*$ is weak-$(p,q)$. Then the set
> $$
> E = \{ f \in L^p(X) : \lim_{N \to \infty} A_Nf(x) \text{ exists } \mu \text{--almost everywhere} \}
> $$
> is closed in $L^p(X)$.

*Proof.*
Take a sequence $(f_n)$ of elements of $E$ and suppose $(f_n) \to f$ in $L^p(X)$ norm. We will show that $f \in E$ by proving that
$$
\limsup_{M,N \to \infty} |A_Mf - A_Nf| = 0
$$
almost everywhere. For any $M,N,n \in \mathbb{N}$ we can pointwise bound
$$
|A_Mf - A_Nf| \leq |A_M(f -f_n)| + |A_Mf_n - A_Nf_n| + |A_N(f_n-f)| \tag{$*$}
$$
using the linearity of $A_N$, and hence
$$
|A_Mf - A_Nf| \lesssim |A_Mf_n + A_Mf_n| + A^*(f_n-f).
$$
Since $f_n \in E$ by assumption, on taking limit superiors it follows that
$$
\limsup_{M,N \to \infty} |A_Mf-A_Nf| \lesssim A^*(f_n-f)
$$
pointwise. If $q = \infty$ then we have
$$
\limsup_{M,N \to \infty} |A_Mf-A_Nf| \lesssim \|A^*(f_n-f)\|_{L^\infty(X)}
$$
almost everywhere, and since $A^*$ is weak-$(p,\infty)$ the right hand side is bounded by a constant times $\|f_n-f\|_{L^p(X)}$, which tends to zero as $n \to \infty$. It follows that
$$
\limsup_{M,N \to \infty} |A_Mf-A_Mf| = 0
$$
almost everywhere as required. If $q < \infty$, then for any $\lambda>0$ we have
$$
\mu \left( \limsup_{M,N \to \infty} |A_Mf-A_Nf| > \lambda \right) \leq \mu(A^*(f_n-f) > \lambda).
$$
Since $A^*$ is assumed to be weak-$(p,q)$, the right hand side is
$$
O \left( \frac{\|f_n-f\|_{L^p(X)}}{\lambda} \right)^q
$$
which tends to zero as $n \to \infty$. By continuity of measure we see that
$$
\mu \left( \limsup_{M,N \to \infty} |A_Mf-A_Nf| > 0 \right) = 0
$$
and the result follows in this case too.
<span class="proof-end">$\square$</span>

Let us denote
$$
A_Nf(x) = \frac{1}{N} \sum_{n=1}^N f(T^nx)
$$
and note that $A_N$ is linear. By the above lemma, in order to prove that $A_Nf$ converges almost everywhere as $N \to \infty$ for all $f \in L^p(X)$ it suffices to prove the following:
1. there is a dense subset of $L^p(X)$ on which the almost everywhere convergence of $A_N$ holds; and
2. there exists $1 \leq q \leq \infty$ such that the maximal operator $A^* = \sup_{N \in \mathbb{N}} |A_N|$ is weak-$(p,q)$.

Indeed, the only closed and dense subset of $L^p(X)$ is $L^p(X)$ itself and step 2 implies that the set of $f \in L^p(X)$ for which $A_Nf$ converges pointwise is a closed subset by the lemma.

### Proving a Maximal Estimate

We will begin by proving that $A^*$ satisfies weak type inequalities for all $1 \leq p \leq \infty$. Since
$$
\sup_{N \in \mathbb{N}} |A_Nf| \lesssim \sup_{N \in \mathbb{D}} A_N|f|
$$
where $\mathbb{D} = \{ 2^n : n \in \mathbb{N} \}$, there is no loss of generality in redefining
$$
A^*f = \sup_{N \in \mathbb{D}} |A_Nf|.
$$
At first glance, establishing weak-type bounds for $A^*$ is a tricky task, even with this redefinition, since the maximal operator depends on the measure space. It is clear that $A^*$ is strong-$(\infty, \infty)$ so by the Marcinkiewicz interpolation theorem it suffices to prove that $A^*$ is weak-$(1,1)$, but this is also difficult. However, a transference principle of Calderón will allow us to only consider the case where $X = \mathbb{Z}$, $\mu$ is the counting measure, and $T$ is defined by $Tx = x-1$. Note the maximal operator corresponding to the averaging operators in this case is given by
$$
\sup_{N \in \mathbb{D}} \left| \frac{1}{N} \sum_{n=1}^N f(x-n) \right|,
$$
and this is simply a discrete version of the (one-sided) Hardy--Littlewood maximal function. We will denote the $N$th averaging operator in the integer case by $M_N$ and corresponding maximal function by $M^*$. By an analogous argument to the continuous version (in particular, the Vitali covering lemma holds on the integers), we know that $M^*$ is weak-$(1,1)$. The Calderón transference principle allows us to extend this results to $A^*$ as follows. 

Fix $R>0$ and consider the truncated maximal function
$$
A^*_{\leq R} f = \sup_{\substack{N \leq R \\ N \in \mathbb{D}}} |A_Nf|.
$$
Given $f:X \to \mathbb{C}$ define $F: X \times \mathbb{Z} \to \mathbb{C}$ by
$$
F_x(n) = f(T^{-n}x) 1_{1 \leq n \leq 2R}.
$$
Then for any $N \leq R$ and $R < k \leq 2R$ we have
$$
A_Nf(T^{-k}x) = \frac{1}{N} \sum_{n=1}^N f(T^{n-k}x) = \frac{1}{N} \sum_{n=1}^N F_x(k-n) = M_NF_x(k)
$$
since $k-n \leq 2R$ for all $n \leq N$. We can therefore bound
$$
A^*_{\leq R} f(T^{-k}x) \leq M^*F_x(k).
$$
By the measure preserving nature of $T$, Fubini's theorem, and this inequality, for any $\lambda > 0$ we can bound
$$
\mu(A^*_{\leq R} f(x) > \lambda) = \frac{1}{R} \sum_{k=R+1}^{2R} \mu(A^*_{\leq R}f(T^{-k}x) > \lambda) \leq \frac{1}{R} \int_X |\{ k \in \mathbb{Z} : M^*F_x(k) > \lambda \}| \,d\mu(x).
$$
Applying the weak-$(1,1)$ bound to $M^*$, unpacking the definition of $F_x$, and applying Fubini's theorem again, we see that
$$
\mu(A^*_{\leq R} f(x) > \lambda) \lesssim \frac{1}{R} \sum_{k=1}^{2R} \int_X  |f(T^{-k}x)| \,d\mu(x).
$$
By the measure preserving nature of $T$ again, we have obtained
$$
\mu(A^*_{\leq R}f(x) > \lambda) \lesssim \frac{1}{R} \sum_{k=1}^{2R} \|f\|_{L^1(X)} \lesssim \|f\|_{L^1(X)}.
$$
By monotone convergence, we see that $A^*$ is weak-$(1,1)$ as required.

### Finding a Dense Subset

We have shown that for every $1 \leq p \leq \infty$ the maximal operator $A^*$ is weak-$(p,p)$. We will now show that for each $1 \leq p < \infty$ we can find a dense subset of $L^p(X)$ on which pointwise convergence holds. It will actually suffice to find a dense subset of $L^2(X)$, say. Once we have found a dense subset of $L^2(X)$ then since $A^*$ is weak-$(2,2)$ we will have shown that $A_Nf$ converges pointwise for all $f \in L^2(X)$. For $p \neq 2$, recall that $L^p(X) \cap L^2(X)$ is dense in $L^p(X)$. Since we will have established that $A_Nf$ converges pointwise for all $f \in L^p(X) \cap L^2(X)$, this will also prove that $A_Nf$ converges pointwise for all $f \in L^p(X)$. It will be convenient to reduce to the $L^2(X)$ case since we can exploit its Hilbert space structure.

To find a dense subset of $L^2(X)$ we begin by identifying two subsets of $L^2(X)$ on which pointwise convergence is clear. Let
$$
\mathcal{I} = \{ f \in L^2(X) : f \circ T = f \}
$$
denote the set of $T$-invariant functions, and let
$$
\mathcal{J} = \{ h - h \circ T : h \in L^2(X) \cap L^\infty(X) \}
$$
be the set of so-called *co-boundary* functions. If $f \in \mathcal{I}$ then
$$
A_Nf(x) = \frac{1}{N} \sum_{n=1}^N f(x) = f(x)
$$
which clearly converges back to $f$. On the other hand, if $f \in \mathcal{J}$ then we can write $f = h - h \circ T$ for some $h \in L^2(X) \cap L^\infty(X)$. Then
$$
|A_Nf(x)| = \frac{|h(Tx) - h(T^{N+1}x)|}{N} \lesssim \frac{\|h\|_{L^\infty(X)}}{N} \to 0
$$
as $N \to \infty$.

We claim that $\mathcal{I}$ is the orthogonal complement of $\mathcal{J}$. In other words, we claim that
$$
\mathcal{I} = \mathcal{J}^\perp = \{ f \in L^2(X) : \langle f, g \rangle = 0 \text{ for all } g \in \mathcal{J} \}.
$$
First suppose $f \in \mathcal{I}$. Then for any $h \in L^2(X) \cap L^\infty(X)$ we have
$$
\langle f, h - h \circ T \rangle = \langle f, h \rangle - \langle f, h \circ T \rangle = \langle f \circ T, h \circ T \rangle - \langle f \circ T, h \circ T \rangle = 0
$$
where we used the measure preserving nature of $T$ in the first inner product and the $T$-invariance of $f$ in the second. On the other hand, if $f \in \mathcal{J}^\perp$ then for any $R>0$ we have $f1_{|f| \leq R} \in L^2(X) \cap L^\infty(X)$ hence
$$
\langle f, 1_{|f| \leq R} - (f1_{|f| \leq R}) \circ T \rangle = 0.
$$
Therefore, by the measure preserving nature of $T$ we have
$$
\|f - f \circ T \|_{L^2(X)}^2 = 2 \langle f, f \rangle - 2 \Re \langle f, f \circ T \rangle = 2 \Re \langle f, f - f \circ T \rangle = 2\Re \langle f, f1_{|f|>R} - (f1_{|f|>R}) \circ T \rangle,
$$
which tends to zero as $R \to \infty$ by dominated convergence and the Cauchy--Schwarz inequality. This proves the claim.

It can be seen that
$$
\mathcal{J}^\perp = \left( \overline{\mathrm{span}(\mathcal{J})} \right)^\perp,
$$
and $\overline{\mathrm{span}(\mathcal{J})}$ is a closed linear subspace of $L^2(X)$ so standard Hilbert space results yield
$$
L^2(X) = \left( \overline{\mathrm{span}(\mathcal{J})} \right)^\perp \oplus \overline{\mathrm{span}(\mathcal{J})} = \mathcal{J}^\perp \oplus \overline{\mathrm{span}(\mathcal{J})} = \mathcal{I} \oplus \overline{\mathrm{span}(\mathcal{J})}. 
$$
By linearity it is clear that we have pointwise convergence on the set $\mathcal{I} \oplus \mathrm{span}(\mathcal{J})$, and we have shown that this set is dense in $L^2(X)$.

### Completing the Proof

Combining the previous two steps, we have shown that on any measure space $(X,\mu)$ the averages $A_Nf$ converge pointwise almost everywhere whenever $f \in L^p(X)$ with $1 \leq p < \infty$. It only remains to prove that the limiting function is equal to $\int_X f \,d\mu$ in the case where $\mu$ is a probability measure and $T$ is ergodic.

Recall that if $T$ is ergodic then the only $T$-invariant functions are constant functions. Take $f \in L^\infty(X)$ and let
$$
Lf(x) = \lim_{N \to \infty} A_Nf(x)
$$
whenever the limit exists. Note
$$
A_Nf(Tx) = \frac{1}{N} \sum_{n=2}^{N+1} f(T^nx) = A_Nf(x) + O \left( \frac{\|f\|_{L^\infty(X)}}{N} \right),
$$
so on taking limits as $N \to \infty$, for any $x$ for which $Lf(x)$ exists we have $Lf(Tx) = Lf(x)$, i.e. $Lf$ is a $T$-invariant function. It follows that $Lf$ is constant. If we denote this constant value by $c$ then
$$
c = \int_X Lf(x) \,d\mu(x) = \int_X \lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N f(T^nx) \,d\mu(x).
$$
By dominated convergence, linearity, and the measure preserving nature of $T$ it follows that
$$
c = \lim_{N \to \infty} \frac{1}{N} \sum_{n=1}^N \int_X f(T^nx) \,d\mu(x) = \int_X f(x) \,d\mu(x).
$$
Thus $\lim_{N \to \infty} A_Nf = \int_X f \,d\mu$ almost everywhere for all $f \in L^\infty(X)$.

For general $f \in L^1(X)$ we can find a sequence of functions $f_n \in L^\infty(X)$ such that $\|f_n-f\|_{L^1(X)} \to 0$ as $n \to \infty$. For all $N,n \in \mathbb{N}$ we can bound
$$
\left\|A_Nf - \int_X f \,d\mu\right\|_{L^1(X)} \leq \|A_N(f - f_n)\|_{L^1(X)} + \left\|A_Nf_n - \int_X f_n \,d\mu \right\|_{L^1(X)} + \left\| \int_X |f_n-f| \,d\mu \right\|_{L^1(X)}.
$$
The third term on the right hand side is equal to
$$
\left\| \|f_n-f\|_{L^1(X)} \right\|_{L^1(X)} = \|f_n-f\|_{L^1(X)}.
$$
By applying the triangle inequality and the measure preserving nature of $T$ we also have
$$
\|A_N(f_n-f)\|_{L^1(X)} \leq \frac{1}{N} \sum_{k=1}^N \|f_n \circ T^k - f \circ T^kx| \|_{L^1(X)} = \frac{1}{N} \sum_{k=1}^N \|f_n - f\| = \|f_n-f\|_{L^1(X)}.
$$
Since $f_n$ is bounded for all $n$ we have
$$
\lim_{N \to \infty} A_Nf_n = \int_X f_n \,d\mu
$$
and thus by dominated convergence it follows that
$$
\lim_{N \to \infty} \left\|A_Nf_n - \int_X f_n \,d\mu \right\|_{L^1(X)} = 0.
$$
Therefore,
$$
\limsup_{N \to \infty} \left\|A_Nf - \int_X f \,d\mu \right\|_{L^1(X)} \lesssim \|f_n-f\|_{L^1(X)}.
$$
Taking $n \to \infty$, we see that
$$
\lim_{N \to \infty} \left\|A_Nf - \int_X f \,d\mu \right\|_{L^1(X)} = 0.
$$
It follows that there is a subsequence $(N_j)$ such that
$$
\lim_{j \to \infty} A_{N_j}f = \int_X f \,d\mu
$$
almost everywhere. But we already know that $A_Nf$ converges almost everywhere so by uniqueness of limits it follows that $\lim_{N \to \infty} A_Nf = \int_X f \,d\mu$ almost everywhere. This completes the proof of Birkhoff's theorem.

[^1]: We have actually just proved a specific case of Weyl's criterion. Namely, for any real sequence $(u_n)$, its fractional parts are equidistributed if and only if $\frac{1}{N} \sum_{n=1}^N e(ku_n) \to 0$ for all non-zero integers $k$.
